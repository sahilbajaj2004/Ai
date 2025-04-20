// filepath: d:\Ai\src\components\Login.jsx
import React, { useEffect, useState } from "react";
import "./Login.css";

const Login = ({ onUserChange }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let auth, onAuthStateChanged;

        const loadFirebase = async () => {
            const { initializeApp } = await import("firebase/app");
            const { getAuth, onAuthStateChanged: authStateChanged } = await import("firebase/auth");
            const app = initializeApp({
                apiKey: "AIzaSyAPviym6GlHi7y7wfXQxOD2J9u0C5syUNk",
                authDomain: "moodmate-42cc6.firebaseapp.com",
                projectId: "moodmate-42cc6",
                storageBucket: "moodmate-42cc6.firebasestorage.app",
                messagingSenderId: "632502462277",
                appId: "1:632502462277:web:8bced5f25946d84bd6002c",
                measurementId: "G-ZTYMMBSLY8"
            });

            auth = getAuth(app);
            onAuthStateChanged = authStateChanged;

            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                if (currentUser) {
                    setUser(currentUser);
                    onUserChange(currentUser);
                } else {
                    setUser(null);
                    onUserChange(null);
                }
            });

            return () => unsubscribe();
        };

        loadFirebase();
    }, [onUserChange]);

    const handleLogin = async () => {
        const { getAuth, signInWithPopup, GoogleAuthProvider } = await import("firebase/auth");
        const { getFirestore, collection, addDoc, query, where, getDocs } = await import("firebase/firestore");

        const auth = getAuth();
        const db = getFirestore();
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const userRef = collection(db, "users");
            const q = query(userRef, where("uid", "==", user.uid));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                const userData = {
                    uid: user.uid || "",
                    name: user.displayName || "",
                    email: user.email || "",
                    photoURL: user.photoURL || "",
                    createdAt: new Date().toISOString(),
                };

                await addDoc(userRef, userData);
            }

            setUser(user);
            onUserChange(user);
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    const handleLogout = async () => {
        const { getAuth, signOut } = await import("firebase/auth");

        try {
            const auth = getAuth();
            await signOut(auth);
            setUser(null);
            onUserChange(null);
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <div className="login-container">
            {user ? (
                <div className="user-info">
                    <span className="user-name">{user.displayName}</span>
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                </div>
            ) : (
                <button onClick={handleLogin} className="login-button">Login with Google</button>
            )}
        </div>
    );
};

export default Login;
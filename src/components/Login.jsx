import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import "./Login.css";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPviym6GlHi7y7wfXQxOD2J9u0C5syUNk",
    authDomain: "moodmate-42cc6.firebaseapp.com",
    projectId: "moodmate-42cc6",
    storageBucket: "moodmate-42cc6.firebasestorage.app",
    messagingSenderId: "632502462277",
    appId: "1:632502462277:web:8bced5f25946d84bd6002c",
    measurementId: "G-ZTYMMBSLY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const Login = ({ onUserChange }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Listen for authentication state changes
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                onUserChange(currentUser);
            } else {
                setUser(null);
                onUserChange(null);
            }
        });

        return () => unsubscribe();
    }, [onUserChange]);

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Save user info to Firestore if not already saved
            const userRef = collection(db, "users");
            const q = query(userRef, where("uid", "==", user.uid));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                const userData = {
                    uid: user.uid || "",
                    name: user.displayName || "",
                    email: user.email || "",
                    photoURL: user.photoURL || "",
                    createdAt: new Date().toISOString(), // optional: for tracking
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
        try {
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
                    {/* <img src={user.photoURL} alt="User Avatar" className="user-avatar" /> */}
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
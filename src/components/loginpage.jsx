import React, { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const saveChatMessage = async (message) => {
    if (!user) {
      console.error("User must be logged in to save chat messages.");
      return;
    }

    try {
      await addDoc(collection(db, "chatHistory"), {
        userId: user.uid,
        message,
        timestamp: new Date(),
      });
      console.log("Chat message saved successfully.");
    } catch (error) {
      console.error("Error saving chat message:", error);
    }
  };

  const fetchChatHistory = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "chatHistory"));
      const chats = querySnapshot.docs.map((doc) => doc.data());
      setChatHistory(chats);
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchChatHistory();
    }
  }, [user]);

  return (
    <div style={{ position: "absolute", top: 10, right: 10 }}>
      {user ? (
        <div>
          <button
            onClick={handleLogout}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f0f0f0",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <span role="img" aria-label="person" style={{ marginRight: "5px" }}>
              👤
            </span>
            Logout
          </button>
          <div style={{ marginTop: "20px" }}>
            <h3>Chat History</h3>
            <ul>
              {chatHistory.map((chat, index) => (
                <li key={index}>
                  <strong>{chat.userId}:</strong> {chat.message} <em>({chat.timestamp.toDateString()})</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          <span role="img" aria-label="person" style={{ marginRight: "5px", color: "white" }}>
            👤
          </span>
          Login with Google
        </button>
      )}
    </div>
  );
};

export default LoginPage;
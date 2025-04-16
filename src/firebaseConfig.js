// filepath: d:\Ai\src\firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAPviym6GlHi7y7wfXQxOD2J9u0C5syUNk",
    authDomain: "moodmate-42cc6.firebaseapp.com",
    projectId: "moodmate-42cc6",
    storageBucket: "moodmate-42cc6.firebasestorage.app",
    messagingSenderId: "632502462277",
    appId: "1:632502462277:web:8bced5f25946d84bd6002c",
    measurementId: "G-ZTYMMBSLY8"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
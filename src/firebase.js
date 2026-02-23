import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCjf7RhfnJYjj7kcgS3DLYH7pSgHR06-qE",
    authDomain: "admin-a40a9.firebaseapp.com",
    projectId: "admin-a40a9",
    storageBucket: "admin-a40a9.firebasestorage.app",
    messagingSenderId: "498086981116",
    appId: "1:498086981116:web:974bd86d96a87dbc3b9679",
    measurementId: "G-DT82CYZXFL"
};

import { getAuth } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

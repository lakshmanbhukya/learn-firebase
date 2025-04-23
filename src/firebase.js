// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDCYgzuDiESSqecUHFNeaYK5xEGDqraMcg",
  authDomain: "demofirebase-exe.firebaseapp.com",
  projectId: "demofirebase-exe",
  storageBucket: "demofirebase-exe.firebasestorage.app",
  messagingSenderId: "58026073944",
  appId: "1:58026073944:web:20adf808c3b378608b8f2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestorefs = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


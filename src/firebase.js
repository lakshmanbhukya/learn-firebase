// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  //your_config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestorefs = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


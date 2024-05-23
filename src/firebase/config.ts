// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG6L1VTpoUmoL_5pv7DfJyy1RHeMSYnc4",
  authDomain: "meus-15-anos-25-anos-depois.firebaseapp.com",
  projectId: "meus-15-anos-25-anos-depois",
  storageBucket: "meus-15-anos-25-anos-depois.appspot.com",
  messagingSenderId: "419906390248",
  appId: "1:419906390248:web:97315de31cce39a8d8a15d",
  measurementId: "G-GDCZX35HWD",
  privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
  clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

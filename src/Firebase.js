import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
  apiKey: "AIzaSyBP6u5AdO14UAApW3-oKyeXjxevV46gsms",
  authDomain: "kothon-2bd36.firebaseapp.com",
  projectId: "kothon-2bd36",
  storageBucket: "kothon-2bd36.appspot.com",
  messagingSenderId: "39390523118",
  appId: "1:39390523118:web:f5a3a7f534b11236f40dff",
  measurementId: "G-HBEKD49HC7",
});
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const firestore = getFirestore(app);

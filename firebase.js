// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkl-zifFa8GGyNuAuh33yJ93K4gEEMZWo",
  authDomain: "african-trends-343807.firebaseapp.com",
  projectId: "african-trends-343807",
  storageBucket: "african-trends-343807.appspot.com",
  messagingSenderId: "271604150148",
  appId: "1:271604150148:web:d907710d88d595c2c837d1",
  measurementId: "G-Z1HKFZGX3S",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

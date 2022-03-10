// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpa2EDtFOx9HCSpyH1H1vrTGez-eqI0sw",
  authDomain: "african-trends.firebaseapp.com",
  projectId: "african-trends",
  storageBucket: "african-trends.appspot.com",
  messagingSenderId: "1031962382355",
  appId: "1:1031962382355:web:36cd1020a4792e547c2fe6",
  measurementId: "G-LZN4GW95QP",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

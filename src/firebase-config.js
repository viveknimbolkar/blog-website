// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhBcvtI4RLZh6DNBw6W-guOxGD66t5Boo",
  authDomain: "blog-website-672a7.firebaseapp.com",
  projectId: "blog-website-672a7",
  storageBucket: "blog-website-672a7.appspot.com",
  messagingSenderId: "124188738102",
  appId: "1:124188738102:web:a1805623ec8a81c0d40e97",
  measurementId: "G-HBW8HH1NDZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

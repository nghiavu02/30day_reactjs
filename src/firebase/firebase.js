// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTpjww-FTZf9kYDb9IgaSLQK_QH2JDPoE",
  authDomain: "pro1-1d94d.firebaseapp.com",
  projectId: "pro1-1d94d",
  storageBucket: "pro1-1d94d.appspot.com",
  messagingSenderId: "636894226811",
  appId: "1:636894226811:web:a2cc697372e2d6c1f675de",
  measurementId: "G-6H5YGSBXJR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth();

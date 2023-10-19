// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRl5b5sT4OshKQCvoXMuPapLnXuArgMOg",
  authDomain: "question-bank-c7051.firebaseapp.com",
  projectId: "question-bank-c7051",
  storageBucket: "question-bank-c7051.appspot.com",
  messagingSenderId: "838072787020",
  appId: "1:838072787020:web:eca42d5cb221d7eb1994e9",
  measurementId: "G-7ZZQMP777M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt_c9ETdgj9b5xknHOHA8PjIuCtcj6a_k",
  authDomain: "todolist-6870f.firebaseapp.com",
  projectId: "todolist-6870f",
  storageBucket: "todolist-6870f.appspot.com",
  messagingSenderId: "823759752152",
  appId: "1:823759752152:web:5a8ae592c1a42429bd40ad",
  measurementId: "G-09QL768YGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { db, auth };
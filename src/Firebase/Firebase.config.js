// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQbt7ymsx0F5knu6QlqvmFRC7tkipI8Pc",
  authDomain: "dragon-news-d6a96.firebaseapp.com",
  projectId: "dragon-news-d6a96",
  storageBucket: "dragon-news-d6a96.firebasestorage.app",
  messagingSenderId: "1074776698274",
  appId: "1:1074776698274:web:96157d8910cb9e27d316fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
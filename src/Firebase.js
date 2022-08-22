// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1YuDIxfDlyGQ_8P_QIHDQsFvm9Zjf0HI",
  authDomain: "ecommerce-129d0.firebaseapp.com",
  projectId: "ecommerce-129d0",
  storageBucket: "ecommerce-129d0.appspot.com",
  messagingSenderId: "841290789830",
  appId: "1:841290789830:web:a3ab5870445931af3678c7",
  measurementId: "G-QVRJXK6GE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
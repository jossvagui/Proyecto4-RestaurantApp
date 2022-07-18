// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCn74JWRT1kk1irYQZnYZvWcUHQyuOFB9E",
  authDomain: "proyecto-restaurant-18001.firebaseapp.com",
  projectId: "proyecto-restaurant-18001",
  storageBucket: "proyecto-restaurant-18001.appspot.com",
  messagingSenderId: "805791834560",
  appId: "1:805791834560:web:e6b58c5e4f59576eeda825"
});

// Initialize Firebase
const db = firebaseApp.firestore();

export { db };




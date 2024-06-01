// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' 
const firebaseConfig = {
  apiKey: "AIzaSyDE-YdK-E6ugX_k8EuhVyLG1VbaQFIgABk",
  authDomain: "netflix-clone-99e82.firebaseapp.com",
  projectId: "netflix-clone-99e82",
  storageBucket: "netflix-clone-99e82.appspot.com",
  messagingSenderId: "74995411310",
  appId: "1:74995411310:web:1f850e14e4f3300637797f",
  measurementId: "G-13TBZECBCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)


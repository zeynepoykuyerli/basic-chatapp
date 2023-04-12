// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATpksAvLUCn9XzkK1k8DBZWZtT4kMxHjs",
  authDomain: "bitirme-projesi-8e219.firebaseapp.com",
  projectId: "bitirme-projesi-8e219",
  storageBucket: "bitirme-projesi-8e219.appspot.com",
  messagingSenderId: "984397199480",
  appId: "1:984397199480:web:58c5f14cee5fb1f186958d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
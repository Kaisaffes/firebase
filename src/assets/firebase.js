// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsTaaiJjjnOa6vdlasKMEPrJIBcghkP70",
  authDomain: "fir-4fcdc.firebaseapp.com",
  projectId: "fir-4fcdc",
  storageBucket: "fir-4fcdc.appspot.com",
  messagingSenderId: "433247345076",
  appId: "1:433247345076:web:556ec76667760b19cdbae1",
  measurementId: "G-Y7XH7H1QYV",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
export const registeredUserCollection = collection(db, "registeredUsers");
export const usersCollection = collection(db, "users");

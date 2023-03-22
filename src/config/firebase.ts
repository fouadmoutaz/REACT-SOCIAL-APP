// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ9d3KkdZoMCom9QITAUsjiWJ-VyN_MpU",
  authDomain: "social-media-app-384ed.firebaseapp.com",
  projectId: "social-media-app-384ed",
  storageBucket: "social-media-app-384ed.appspot.com",
  messagingSenderId: "1006322726312",
  appId: "1:1006322726312:web:b2c43db8c42fd0533f999d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirebase, getFirestore, } from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrNEakFngp0ucmTrfE0VXq0HBmFQHJnPY",
  authDomain: "mirepostera-ac0ab.firebaseapp.com",
  projectId: "mirepostera-ac0ab",
  storageBucket: "mirepostera-ac0ab.appspot.com",
  messagingSenderId: "116964201105",
  appId: "1:116964201105:web:4be241195e7be6e1d1e530"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)
export const db = getFirestore(app)
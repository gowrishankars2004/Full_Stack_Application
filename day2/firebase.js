
// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDDjzVwSEZ-nVAu-airgQcdJlK4Qob-Wp0",
  authDomain: "super-market-management-dbb9e.firebaseapp.com",
  projectId: "super-market-management-dbb9e",
  storageBucket: "super-market-management-dbb9e.appspot.com",
  messagingSenderId: "523463600256",
  appId: "1:523463600256:web:e1271e92734a6e0a549e65",
  measurementId: "G-WN4LCE2ZHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export default firebase;
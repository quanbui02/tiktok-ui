// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBR39h5f4JcO0R6FAfdBQQK67iXIg7AoH4',
  authDomain: 'tiktok-ui-87754.firebaseapp.com',
  projectId: 'tiktok-ui-87754',
  storageBucket: 'tiktok-ui-87754.appspot.com',
  messagingSenderId: '43290485062',
  appId: '1:43290485062:web:fd868014badb9b6fba4547',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;

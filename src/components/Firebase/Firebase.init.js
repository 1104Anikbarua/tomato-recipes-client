// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgdbj5JH6Wd3Dks_Q3Li-4oJRcKpYziWI",
    authDomain: "recipe-site-700d0.firebaseapp.com",
    projectId: "recipe-site-700d0",
    storageBucket: "recipe-site-700d0.appspot.com",
    messagingSenderId: "677299790161",
    appId: "1:677299790161:web:286f1085d6f680c0be3370"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
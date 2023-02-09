import firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyD1s-ReHBPSlm7isnYRRYiz5ZtjU7ROPFk",
    authDomain: "olxreact-9cd4c.firebaseapp.com",
    projectId: "olxreact-9cd4c",
    storageBucket: "olxreact-9cd4c.appspot.com",
    messagingSenderId: "941247297696",
    appId: "1:941247297696:web:bf5770c4ebbf845804f1c5"
  };


const app = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();




export {auth,db,storage};
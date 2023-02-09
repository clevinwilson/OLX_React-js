import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC0LnSQvj4bhCmpQYL9k9jP21EOGHCcyFI",
  authDomain: "olxreactjs-c6352.firebaseapp.com",
  projectId: "olxreactjs-c6352",
  storageBucket: "olxreactjs-c6352.appspot.com",
  messagingSenderId: "65525285502",
  appId: "1:65525285502:web:057bebd44dc2da280d4e2f"
};


const app = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();




export {auth,db,storage};
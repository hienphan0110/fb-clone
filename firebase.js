import firebase from "firebase";
import "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import { collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCn4jNt7rv0HiEzY5g86NbNHQihaDzCBd0",
  authDomain: "fb-f-d8eb4.firebaseapp.com",
  projectId: "fb-f-d8eb4",
  storageBucket: "fb-f-d8eb4.appspot.com",
  messagingSenderId: "874258694679",
  appId: "1:874258694679:web:e965719308d9a60b7f9252",
  measurementId: "G-ZDYQ0ZQ4R7",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// const app = initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();

export { storage, db };

import firebase from "firebase";
import "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import { collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCYuzCXBy4Fh0CoNPRnPPj4G1C1CnN4Pus",
  authDomain: "fb-2-a7f91.firebaseapp.com",
  projectId: "fb-2-a7f91",
  storageBucket: "fb-2-a7f91.appspot.com",
  messagingSenderId: "849553030507",
  appId: "1:849553030507:web:e83103f7fda901d02f602e",
  measurementId: "G-EKJJZHQF6J",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// const app = initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();

export { storage, db };

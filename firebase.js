import firebase from "firebase";
import "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import { collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAkrxY9mq4qPSXGNQOhcDwGKFWda3Oq4ng",
  authDomain: "facebook-2-8b728.firebaseapp.com",
  projectId: "facebook-2-8b728",
  storageBucket: "facebook-2-8b728.appspot.com",
  messagingSenderId: "885281299682",
  appId: "1:885281299682:web:690f57b778d995ec6352bb",
  measurementId: "G-2NDBVL147K",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// const app = initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();

export { storage, db };

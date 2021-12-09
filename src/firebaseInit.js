// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import {getFirestore} from 'firebase/firestore';
// import 'firebaseInstance/storage';
// const firebaseConfig = {
//   apiKey: '%apiKey%',
//   authDomain: '%authDomain%',
//   projectId: '%projectId%',
//   storageBucket: '%storageBucket%',
//   messagingSenderId: '%messagingSenderId%',
//   appId: '%appId%',
//   measurementId: '%measurementId%',
//   // databaseURL: '<your-database-url>',
// };


const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId:  process.env.REACT_APP_measurementId,
  // databaseURL: '<your-database-url>',
};

// firebase.initializeApp(firebaseConfig);
// export const firebaseInstance = firebase;
export const firebaseInstance = initializeApp(firebaseConfig);
// export const dbService = firebase.firestore();
// export const dbService = firebase.firestore();
export const dbService = getFirestore();
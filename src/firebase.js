import firebase from "firebase/compat/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: '%apiKey%',
    authDomain: '%authDomain%',
    projectId: '%projectId%',
    storageBucket: '%storageBucket%',
    messagingSenderId: '%messagingSenderId%',
    appId: '%appId%',
    measurementId: '%measurementId%'
  };

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
//firebase.initializeApp(firebaseConfig).firestore()


export { firestore };


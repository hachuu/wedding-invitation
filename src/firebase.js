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

// Get a list of cities from your database
// async function getComments(db) {
//   const commentCol = collection(db, 'comment-board');
//   const citySnapshot = await getDocs(commentCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

const firestore = firebase.firestore();
//firebase.initializeApp(firebaseConfig).firestore()


export { firestore };


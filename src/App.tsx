import "./App.css";
import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";
import PC from "./page/PC";
import Mobile from "./page/Mobile";
import React, { useCallback, useEffect } from "react";
import {firebaseInstance, dbService} from "./firebaseInit";
// import { firestore } from "./firebase";
import { getFirestore, doc, onSnapshot } from "firebase/firestore"
import { collection, getDocs, setDoc,  } from "firebase/firestore";
import * as firebase from "firebase/app";

function App() {
  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });

  const db = getFirestore();
  // console.log(db);
  console.log(dbService);

  // const fetchData = useCallback(async () => {
  //   console.log("fetchData");
  //   getDocs(collection(db, "comment-board")).then(docs => {
  //     console.log(docs);
  //   });
  // }
  // , []);

  // useEffect(() => {
  //   console.log("fetchData");
  //   const unsub = onSnapshot(doc(db, "comments", "01097520005"), (doc) => {
  //     console.log("Current data: ", doc.data());
  //   });
  // }, []);

  // useEffect(() => {

  // }, [fetchData])
  
  return (
    <div className="App">
      {/* <MediaQuery maxWidth={767}>
        <p>Mobile이시다</p>
      </MediaQuery> */}
      { isMobile ? <Mobile></Mobile>
      : <PC></PC>}
    </div>
  );
}

export default App;

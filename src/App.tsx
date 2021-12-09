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

function App() {

  const db = getFirestore();
  console.log(db);
  console.log(dbService);


  console.log(collection(db, "comment-board"));
  console.log(collection(db, "comment-board"));
  // console.log(firebaseInstance);
  // console.log(firestore);

  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });

  const fetchData = useCallback(async () => {
    console.log("fetchData");
    getDocs(collection(db, "comment-board")).then(docs => {
      console.log(docs);
    });

    // dbService // dbService = firebase.firestore();
    // .collection('comment-board')
    // .onSnapshot((snapshot: { docs: any[]; }) => {
    //   const messageArray = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }));
    //   console.log('msg', messageArray);
    // });


  }

    // const querySnapshot = getDocs(collection(db, "comment-board")).then(querySnapshot => {
    //   querySnapshot.forEach(doc => {
    //     console.log('data' , doc.data());
    //   });
    // })
  , []);

  useEffect(() => {
    console.log("fetchData");
    const unsub = onSnapshot(doc(db, "comment-board", "SF"), (doc) => {
      console.log("Current data: ", doc.data());
  });


  }, []);

  useEffect(() => {

  }, [fetchData])
  
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

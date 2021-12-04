import "./App.css";
import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";
import PC from "./page/PC";
import Mobile from "./page/Mobile";
import React, { useEffect } from "react";
import firebaseInit from "./firebaseInit";
// import { firestore } from "./firebase";
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, setDoc } from "firebase/firestore";

function App() {

  const db = getFirestore();
  

  console.log(collection(db, "comment-board"));
  console.log(collection(db, "comment-board"));
  console.log(firebaseInit);
  // console.log(firestore);

  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });

  useEffect(() => {
    const querySnapshot = getDocs(collection(db, "comment-board"));
    console.log(querySnapshot);
  }, []);
  
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

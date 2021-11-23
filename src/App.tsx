import "./App.css";
import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";
import PC from "./page/PC";
import Mobile from "./page/Mobile";
import React from "react";
import firebaseInit from "./firebaseInit";

function App() {
  console.log(firebaseInit)

  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });
  
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

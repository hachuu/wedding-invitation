import "./App.scss";
import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";
import PC from "./page/PC";
import Mobile from "./page/Mobile";
import React from "react";
import firebaseInit from "./firebaseInit";
import Main from "./page/Main";

function App() {
  console.log(firebaseInit)

  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });
  
  return (
    <div className="App">
      <Main></Main>
      {/* { isMobile ? <Mobile></Mobile>
      : <PC></PC>} */}
    </div>
  );
}

export default App;

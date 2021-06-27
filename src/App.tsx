import "./App.css";
import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";
import Page from "./page/Page";

function App() {

  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });
  
  return (
    <div className="App">
      {/* <MediaQuery maxWidth={767}>
        <p>Mobile이시다</p>
      </MediaQuery> */}
      { isMobile ? <Page></Page>
      : <p>Mobile화면으로 봐주세요</p>}
      
    </div>
  );
}

export default App;

import { useState } from "react";

import Intro from "../components/Intro/Intro";
import Questions from "../components/Questions/Questions";

import stylesApp from "./stylesApp";

// TO DOs

// primary  
  // add corner blobs
  // add try-catch to fetching block

function App() { 
  
  // state

  const [showPage, setShowPage] = useState(false);

  const handleStartQuizClick = () => {
    setShowPage((prevShowPage) => !prevShowPage);
  }

  return (
    <div className={`app ${stylesApp.app}`}>
      {!showPage &&
      <Intro
        handleStartQuizClick={handleStartQuizClick}
      />}
      {showPage && <Questions />}      
    </div>
  );
}

export default App;

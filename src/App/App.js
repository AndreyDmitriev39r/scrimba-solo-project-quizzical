import { useState } from "react";

import Intro from "../components/Intro/Intro";
import Questions from "../components/Questions/Questions";

import stylesApp from "./stylesApp";

// TO DOs

// primary  
  // add corner blobs

  // secondary
  // add active effects on button
  // add box-shadow on button
  // add text-shadow on main heading 

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

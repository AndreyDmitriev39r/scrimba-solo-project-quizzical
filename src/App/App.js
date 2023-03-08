import { useState } from "react";

import Intro from "../components/Intro/Intro";
import Questions from "../components/Questions/Questions";

import stylesApp from "./stylesApp";

// TO DOs

// primary
  // fix &quot and such - see API docs
  // add google fonts  
  // move stylesIntro in its own file
  // add corner blobs

  // secondary
  // add hover and active effects on button
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

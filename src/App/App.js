import { useState, useEffect } from "react";

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

  // fetching

  const [questions, setQuestions] = useState({});

  useEffect(() => {    
    fetch('https://opentdb.com/api.php?amount=5')
      .then(res => res.json())
      .then(data => {        
        setQuestions(data.results);         
      });
  }, []);
  
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
      {showPage && <Questions questions={questions}/>}      
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";

import Intro from "./components/Intro";
import Questions from "./components/Questions";
import Answers from "./components/Answers";

function App() {  

  // styles

  const stylesApp = {
    sizing: "h-full w-full",
  }

  const stylesAppClassList = Object.values(stylesApp).join(" ");

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
    <div className={`app ${stylesAppClassList}`}>
      {!showPage &&
      <Intro
        handleStartQuizClick={handleStartQuizClick}
      />}
      {showPage && <Questions questions={questions}/>}
      {false && <Answers />}
    </div>
  );
}

export default App;

import { useState } from "react";

import Intro from "./components/Intro";
import Questions from "./components/Questions";
import Answers from "./components/Answers";

function App() {

  // state

  const [showPage, setShowPage] = useState(false);

  const handleStartQuizClick = () => {
    setShowPage((prevShowPage) => !prevShowPage);
  }

  return (
    <div className="app">
      {!showPage &&
      <Intro
        handleStartQuizClick={handleStartQuizClick}
      />}
      {showPage && <Questions />}
      {false && <Answers />}
    </div>
  );
}

export default App;

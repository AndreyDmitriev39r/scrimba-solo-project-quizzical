import { useState } from "react";

import Intro from "./components/Intro";
import Questions from "./components/Questions";
import Answers from "./components/Answers";

function App() {

  // styles

  const stylesApp = {
    sizing: "h-full w-full",
  }

  const stylesAppClassList = Object.values(stylesApp).join(" ");

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
      {showPage && <Questions />}
      {false && <Answers />}
    </div>
  );
}

export default App;

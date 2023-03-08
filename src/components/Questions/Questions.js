import { useState, useEffect } from "react";

import Question from "./questions-children/Question/Question";

import stylesQuestions from "./stylesQuestions";

function Questions() {

  // fetching

  const [isLoading, setIsLoading] = useState(() => false);

  const [showCheckBtn, setShowCheckBtn] = useState(() => false);

  const [questions, setQuestions] = useState([]);

  useEffect(() => {    
    fetch('https://opentdb.com/api.php?amount=5')
      .then(res => res.json())
      .then(data => {        
        setQuestions(data.results);
        setIsLoading((prevIsLoading) => !prevIsLoading);   
      });  
  }, []);

  // in order to delay render of the lower button - research for alternatives
  useEffect(() => {
    if (!isLoading) {
      setShowCheckBtn((prevShowCheckBtn) => !prevShowCheckBtn);
    }    
  }, [isLoading])
  
  // rendering

  const questionsToRender = questions.map(question =>
    <Question
      key={question.question}    
      questionHeading={question.question}
      incorrectAnswers={question.incorrect_answers}
      correctAnswer={question.correct_answer}
    />
  )

  return (
    <div className={`questions ${stylesQuestions.questions}`}>
      {isLoading && <h1 className={`loading-message ${stylesQuestions.loading_message}`}>Wait a sec... loading stuff</h1>}
      {!isLoading && questionsToRender}
      {showCheckBtn && <button className={`check-answers ${stylesQuestions.check_answers}`}>Check Answers</button>}
    </div>
    
  );
}

export default Questions;
import { useState, useEffect } from "react";

import Question from "./questions-children/Question/Question";

import stylesQuestions from "./stylesQuestions";

function Questions() {

  // utils

  const getRandomNumber = range => Math.floor(Math.random() * range);

  const getAllAnswers = (incorrectAnswers, correctAnswer, indexToInsert) => {    
    return [
      ...incorrectAnswers.slice(0, indexToInsert),
      correctAnswer,
      ...incorrectAnswers.slice(indexToInsert)
    ];
  };

  // fetching

  const [isLoading, setIsLoading] = useState(() => false);

  const [showCheckBtn, setShowCheckBtn] = useState(() => false);

  const [questions, setQuestions] = useState(() => []);

  useEffect(() => {    
    fetch('https://opentdb.com/api.php?amount=5')
      .then(res => res.json())
      .then(data => {       
        setQuestions(
          data.results.map(item => {
            const indexToInsert = getRandomNumber(item.incorrect_answers.length + 1);
            const allAnswers = getAllAnswers(item.incorrect_answers, item.correct_answer, indexToInsert);
            return {
              questionHeading: item.question,
              allAnswers: allAnswers,
              correctAnswerIndex: indexToInsert,
              isCorrect: false,
            }
          })          
        );        
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
      key={question.questionHeading}    
      questionHeading={question.questionHeading}
      allAnswers={question.allAnswers}
      correctAnswerIndex={question.correctAnswerIndex}
      isCorrect={question.isCorrect}
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
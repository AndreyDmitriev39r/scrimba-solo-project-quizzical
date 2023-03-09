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

  // state

  const [isLoading, setIsLoading] = useState(() => false);

  const [showCheckBtn, setShowCheckBtn] = useState(() => false);  

  const [isSummary, setIsSummary] = useState(() => false);

  const [answeredCorrectly, setAnsweredCorrectly] = useState(() => 0);

  const [questions, setQuestions] = useState(() => []);

  // fetching

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
              correctAnswer: item.correct_answer,
              isCorrect: false,
              activeOption: null,                            
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

  // event handlers

  const handleOptionClick = (e) => {
    console.log('option button clicked');    
    const nextQuestions = questions.map(question => {      
      if (e.target.name !== question.questionHeading) {
        return question;
      } else {        
        if (e.target.innerText !== question.activeOption) {
          return {...question,
            activeOption: e.target.innerText,
            isCorrect: e.target.innerText === question.correctAnswer ? true : false};
        } else {
          return {...question,
            activeOption: null,
            isCorrect: false};
        }
      }
    });
    setQuestions((prevQuestions) => nextQuestions);
  }

  const handleCheckAnswersClick = (e) => {
    console.log('checkanswers button clicked');      
      // refactor UI space's CSS where it should be mounted - ?additional flex item
    // conditionally mount confetti component IF all answers are correct
      // set up state
      // install depend-y
    // change text content inside check answers to `try again`
    setAnsweredCorrectly(questions
      .reduce((counter, question) => question.isCorrect ? counter + 1 : counter, 0));
    setIsSummary((prevIsSummary) => !prevIsSummary);
    // LATER
    // add resetting functionality
  }
  
  // rendering

  const questionsToRender = questions.map(question =>
    <Question
      key={question.questionHeading}    
      questionHeading={question.questionHeading}
      allAnswers={question.allAnswers}      
      activeOption={question.activeOption}
      correctAnswer={question.correctAnswer}
      isSummary={isSummary}
      handleOptionClick={handleOptionClick}      
    />
  )  

  return (    
    <div className={`questions ${stylesQuestions.questions}`}>
      {isLoading &&
      <h1 className={`loading-message ${stylesQuestions.loading_message}`}>Wait a sec... loading stuff</h1>}
      {!isLoading && questionsToRender}
      {showCheckBtn &&
      <button
        className={`check-answers ${stylesQuestions.check_answers}`}
        onClick={handleCheckAnswersClick}
      >Check Answers</button>}
      {isSummary && <p className={`summary`}>You answered {answeredCorrectly} questions correctly</p>}
    </div>    
  );
}

export default Questions;
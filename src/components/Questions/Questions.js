import Question from "./questions-children/Question/Question";

import stylesQuestions from "./stylesQuestions";

function Questions({questions}) {
  
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
      {questionsToRender}
      <button className={`check-answers ${stylesQuestions.check_answers}`}>Check Answers</button>
    </div>
    
  );
}

export default Questions;
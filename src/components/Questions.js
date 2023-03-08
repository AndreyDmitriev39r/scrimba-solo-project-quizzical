import Question from "./questions-children/Question";

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
    <div className="questions">
      {questionsToRender}
    </div>
  );
}

export default Questions;
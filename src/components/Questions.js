import Question from "./questions-children/Question";

function Questions({questions}) {

  // helper functions
  console.log(questions);
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
    <div className="questions bg-blue-300">
      {questionsToRender}
    </div>
  );
}

export default Questions;
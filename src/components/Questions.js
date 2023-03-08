import Question from "./questions-children/Question";

function Questions({questions}) {

  // styles

  const stylesQuestions = {
    questions: 'w-full my-10 flex flex-col items-left gap-4',
    check_answers: "h-9 w-32 self-center mt-1 mb-3 bg-cyan-500 rounded-xl font-mono font-medium text-xs text-zinc-50",
  }
  
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
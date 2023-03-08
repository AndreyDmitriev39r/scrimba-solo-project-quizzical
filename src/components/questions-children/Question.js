function Question({questionHeading, incorrectAnswers, correctAnswer}) {
  console.log(incorrectAnswers)
  console.log(correctAnswer)
  // TO DO
  // add helper function to bump correct answer in random position
  // figure out &quot issue(see API docs)
  return (
    <>
      <h3 className="question-heading">{questionHeading}</h3>
      <div className="questions-options-wrapper">

      </div>
      <br />
    </>
  );
}

export default Question;
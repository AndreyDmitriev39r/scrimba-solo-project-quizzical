import Option from "./question-children/Option";

function Question({questionHeading, incorrectAnswers, correctAnswer}) {  
  // figure out &quot issue(see API docs)

  // helper functions

  const getRandomNumber = range => Math.floor(Math.random() * range);

  const getOptions = (incorrectAnswers, correctAnswer) => {
    const correctAnswerPosition = getRandomNumber(incorrectAnswers.length);
    return [
      ...incorrectAnswers.slice(0, correctAnswerPosition),
      correctAnswer,
      ...incorrectAnswers.slice(correctAnswerPosition)
    ];
  };

  // render

  const optionsToRender = getOptions(incorrectAnswers, correctAnswer).map(optionText =>
    <Option key={optionText} optionText={optionText}/>
  )

  return (
    <>
      <h3 className="question-heading">{questionHeading}</h3>
      <div className="questions-options-wrapper">
        {optionsToRender}
      </div>
      <hr />
    </>
  );
}

export default Question;
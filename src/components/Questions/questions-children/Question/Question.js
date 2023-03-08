import Option from "../question-children/Option/Option";

import stylesQuestion from "./stylesQuestion";

function Question({questionHeading, incorrectAnswers, correctAnswer}) {
  
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
    <div className={`question ${stylesQuestion.question}`}>
      <h3 className={`question-heading ${stylesQuestion.question_heading}`}>{questionHeading}</h3>
      <div className={`questions-options-wrapper ${stylesQuestion.question_options_wrapper}`}>
        {optionsToRender}
      </div>
      <hr className={`divider ${stylesQuestion.divider}`}/>
    </div>
  );
}

export default Question;
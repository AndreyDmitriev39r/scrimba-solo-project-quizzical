import Option from "./question-children/Option";

function Question({questionHeading, incorrectAnswers, correctAnswer}) {  
  // figure out &quot issue(see API docs)

  // styles

  const stylesQuestion = {
    question: "mx-14 flex flex-col gap-3",
    question_heading: "text-base font-mono font-bold text-slate-700",
    question_options_wrapper: "flex flex-row flex-wrap gap-3",
    divider: "border border-gray-300",
  }

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
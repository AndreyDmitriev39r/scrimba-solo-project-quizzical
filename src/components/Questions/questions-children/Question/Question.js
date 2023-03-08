import Option from "../question-children/Option/Option";

import stylesQuestion from "./stylesQuestion";

function Question({questionHeading, allAnswers, correctAnswerIndex, isCorrect, activeOption, handleOptionClick}) {  
  
  // render

  const optionsToRender = allAnswers.map(optionText =>
    <Option key={optionText} optionText={optionText} handleOptionClick={handleOptionClick}/>
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
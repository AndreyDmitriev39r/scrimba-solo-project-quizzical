import Option from "../question-children/Option/Option";

import stylesQuestion from "./stylesQuestion";

function Question({questionHeading, allAnswers, activeOption, handleOptionClick}) {  
  
  // render

  const optionsToRender = allAnswers.map(optionText =>
    <Option
      key={optionText}
      optionFor={questionHeading}
      optionText={optionText}
      handleOptionClick={handleOptionClick}
      activeOption={activeOption}
    />
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
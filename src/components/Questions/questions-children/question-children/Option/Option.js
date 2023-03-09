import stylesOption from "./stylesOption";

function Option({optionText, optionFor, activeOption, correctAnswer, isSummary, handleOptionClick}) {

  const setColors = (activeOption, isSummary, correctAnswer) => {
    if (!isSummary) {
      return activeOption === optionText
        ? stylesOption.option_btn_selected : "";
    } else {
      if (optionText === correctAnswer) {
        return stylesOption.option_btn_checked_correct;
      } else if (activeOption === optionText) {
        return stylesOption.option_btn_checked_incorrect;
      } else {
        return "";
      }
    }
  }

  return (    
    <button
      name={optionFor}
      className={`option-btn ${stylesOption.option_btn} ${setColors(activeOption, isSummary, correctAnswer)}`}
      onClick={handleOptionClick}
    >{optionText}</button> 
  );
}

export default Option;
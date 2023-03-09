import stylesOption from "./stylesOption";

function Option({optionText, optionFor, activeOption, handleOptionClick}) {  
  return (    
    <button
      name={optionFor}
      className={`option-btn ${stylesOption.option_btn} ${activeOption === optionText ? stylesOption.option_btn_selected : ""}`}
      onClick={handleOptionClick}
    >{optionText}</button> 
  );
}

export default Option;
import stylesOption from "./stylesOption";

function Option({optionText, handleOptionClick}) {  
  return (    
    <button
      className={`option-btn ${stylesOption.option_btn}`}
      onClick={handleOptionClick}
    >{optionText}</button> 
  );
}

export default Option;
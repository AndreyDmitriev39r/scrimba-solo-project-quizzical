import stylesOption from "./stylesOption";

function Option({optionText, optionFor, handleOptionClick}) {  
  return (    
    <button
      name={optionFor}
      className={`option-btn ${stylesOption.option_btn}`}
      onClick={handleOptionClick}
    >{optionText}</button> 
  );
}

export default Option;
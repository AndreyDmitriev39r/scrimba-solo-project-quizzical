import stylesOption from "./stylesOption";

function Option({optionText}) {  
  return (    
    <button className={`option-btn ${stylesOption.option_btn}`}>{optionText}</button> 
  );
}

export default Option;
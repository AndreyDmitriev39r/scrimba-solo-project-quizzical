function Option({optionText}) {
  // styles
  const stylesOption = {
    option_btn: "border border-slate-500 rounded-lg py-1 px-3 text-xs font-mono font-medium text-slate-700",
  }
  return (    
    <button className={`option-btn ${stylesOption.option_btn}`}>{optionText}</button> 
  );
}

export default Option;
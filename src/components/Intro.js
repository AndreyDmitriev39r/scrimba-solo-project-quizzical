function Intro({handleStartQuizClick}) {
  // styles
  const stylesIntro = {
    colors: "bg-green-300",
    position: "h-full w-full",
    flex: "flex flex-col justify-center items-center",
  }
  const stylesIntroClassList = Object.values(stylesIntro).join(" ");
  return (
    <div className={`intro ${stylesIntroClassList}`}>
      <h1>Quizzical</h1>
      <p>Description</p>
      <button
        onClick={handleStartQuizClick}
      >Start quiz</button>
    </div>
  );
}

export default Intro;
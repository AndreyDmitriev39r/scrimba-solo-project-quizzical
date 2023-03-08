import stylesIntro from "./stylesIntro";

function Intro({handleStartQuizClick}) {
  return (
    <div className={`intro ${stylesIntro.intro}`}>
      <h1 className={`intro-heading ${stylesIntro.intro_heading}`}>Quizzical</h1>
      <p className={`intro-subheading ${stylesIntro.intro_subheading}`}>
        Ready for quick 5 questions quiz?
      </p>
      <button
        className={`intro-startbtn ${stylesIntro.intro_startbtn}`}
        onClick={handleStartQuizClick}
      >Start quiz</button>
    </div>
  );
}

export default Intro;
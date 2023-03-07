function Intro({handleStartQuizClick}) {
  return (
    <div className="intro bg-green-300">
      <h1>Quizzical</h1>
      <p>Description</p>
      <button
        onClick={handleStartQuizClick}
      >Start quiz</button>
    </div>
  );
}

export default Intro;
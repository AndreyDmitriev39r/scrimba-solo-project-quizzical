function Intro({handleStartQuizClick}) {

  // styles
  // TODOs
  // add google fonts
  // move styles in its own file
  // add corner blobs

  const styles = {
    intro: "h-full w-full flex flex-col justify-center items-center bg-white",
    intro_heading: "mb-2 text-4xl font-bold font-mono text-slate-700",
    intro_subheading: "mb-7 text-base font-normal font-mono text-slate-700",
    intro_startbtn: "h-16 w-48 bg-cyan-500 rounded-2xl font-medium font-mono text-zinc-50",
  }  

  return (
    <div className={`intro ${styles.intro}`}>
      <h1 className={`intro-heading ${styles.intro_heading}`}>Quizzical</h1>
      <p className={`intro-subheading ${styles.intro_subheading}`}>
        Ready for quick 5 questions quiz?
      </p>
      <button
        className={`intro-startbtn ${styles.intro_startbtn}`}
        onClick={handleStartQuizClick}
      >Start quiz</button>
    </div>
  );
}

export default Intro;
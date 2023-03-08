import Question from "./questions-children/Question";

function Questions({questions}) {

  questions.forEach(element => {
    console.log(element);
  });

  return (
    <div className="questions bg-blue-300">
      <h1>Questions</h1>
    </div>
  );
}

export default Questions;
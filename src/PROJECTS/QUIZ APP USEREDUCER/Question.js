const Question = ({ questions, index, dispatch, answer }) => {
  const currQuestions = questions[index];
  const options = currQuestions.options;
  const correntOption = currQuestions.correctOption;

  return (
    <div className="app__question options">
      
      <h3>{currQuestions.question}</h3>
      {options.map((option, idx) => (
        <button
          className={` btn btn-option ${
            answer !== null  ? (correntOption === idx ? "correct" : "wrong") : ""
          }
          ${answer === idx ? "answer" : ""}         
          `}
          onClick={() => dispatch({ type: "ANSWERED", payload: idx })}
          key={option}
          disabled={answer !== null? true : false}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;

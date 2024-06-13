import { useQuiz } from "../context/QuizProvider";

const Question = () => {
  const { questions, index, dispatch, answer } = useQuiz();

  const { options, correctOption, question } = questions[index];
  return (
    <div className="app__question options">
      <h3>{question}</h3>
      {options.map((option, idx) => (
        <button
          className={` btn btn-option ${
            answer !== null ? (correctOption === idx ? "correct" : "wrong") : ""
          }
          ${answer === idx ? "answer" : ""}         
          `}
          onClick={() => dispatch({ type: "ANSWERED", payload: idx })}
          key={option}
          disabled={answer !== null ? true : false}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;

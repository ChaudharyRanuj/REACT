import { useQuiz } from "../context/QuizProvider";

const NextButton = () => {
  const { dispatch, index, totalQuestions } = useQuiz();

  return (
    <div className="app__nextbtn ">
      {index < totalQuestions - 1 && (
        <button
          className="btn btn-ui"
          onClick={() =>
            dispatch({ type: "NEXT QUESTION", payload: index + 1 })
          }
        >
          Next
        </button>
      )}
      {index === totalQuestions - 1 && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "FINISH QUIZ" })}
        >
          Finish
        </button>
      )}
    </div>
  );
};

export default NextButton;

import { useQuiz } from "../context/QuizProvider";

const FinishScreen = () => {
  const { maximumPoints, totalPoints, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Maximum Points: {maximumPoints} </h2>
      <h2>You Scored {totalPoints} Points. </h2>
      <button
        className="btn"
        onClick={() => dispatch({ type: "RESTART QUIZ" })}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default FinishScreen;

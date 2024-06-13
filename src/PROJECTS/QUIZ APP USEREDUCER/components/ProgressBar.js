import { useQuiz } from "../context/QuizProvider";

const ProgressBar = () => {
  const { answer, index, questions, totalPoints } = useQuiz();
  const totalQuestions = questions.length;
  const maximumPoints = questions.reduce((prev, curr) => prev + curr.points, 0);
  return (
    <header className="progress">
      <progress
        id="file"
        value={answer !== null ? index + 1 : index}
        max={totalQuestions}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> /{" "}
        <strong>{totalQuestions}</strong>{" "}
      </p>
      <p>
        <strong>{totalPoints}</strong> /<strong>{maximumPoints}</strong> Points
      </p>
    </header>
  );
};

export default ProgressBar;

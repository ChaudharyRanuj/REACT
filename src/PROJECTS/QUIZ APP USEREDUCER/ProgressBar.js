const ProgressBar = ({
  answer,
  index,
  totalQuestions,
  totalPoints,
  maximumPoints,
}) => {
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

function NextBtn({ dispatch, answer, index, noOfQuestion }) {
  if (answer === null) return null;

  return (
    <div>
      <>
        {noOfQuestion !== index + 1  ? (
          <button
            className="btn"
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Next
          </button>
        ) : (
          <button
            className="btn"
            onClick={() => dispatch({ type: "finish" })}
          >
            Finish
          </button>
        )}
      </>
    </div>
  );
}

export default NextBtn;

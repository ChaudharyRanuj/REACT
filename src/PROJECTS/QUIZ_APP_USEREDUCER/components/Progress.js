function Progress({ index, noOfQuestion, points, answer, maxPoints}) {
 
  return (

    <header className="progress">
      <progress max={noOfQuestion} value={ answer !== null ? index + 1 : index}/>
      <p>
        Question <strong>{ index + 1}</strong> / {noOfQuestion}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;

function App() {
  const [timer, setTimer] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);
  const [toggleStart, setToggleStart] = useState(false);
  const startTimer = () => {
    setTimeInterval(
      setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000)
    );
    setToggleStart(true);
  };

  const stopTimer = () => {
    clearInterval(timeInterval);
    setToggleStart(false);
  };

  const resetTimer = () => {
    setTimer(0);
    clearInterval(timeInterval);
    setToggleStart(false);
  };

  return (
    <div>
      <p style={{ textAlign: "center" }}>{timer}</p>
      <div className="timer">
        <button onClick={startTimer} disabled={toggleStart}>
          Start
        </button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer} disabled={timer === 0}>
          Reset
        </button>
      </div>
      {/* <OnClickCounter />
        <OnHoverCounter /> */}
    </div>
  );
}

export default App;

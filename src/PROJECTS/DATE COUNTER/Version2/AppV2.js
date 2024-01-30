// NAME IMPORT

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("May 05 2050");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div className="date-counter-box">
        <p>Steps:{step}</p>
        <input
          type="range"
          value={step}
          min="1"
          max="10"
          onChange={(e) => setStep(parseInt(e.target.value))}
          className="slider"
        />
      </div>
      <div className="date-counter-box">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <div className="date-element">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} day ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
      {count !== 0 || step !== 1 ? (
        <div className="reset-btn-div">
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

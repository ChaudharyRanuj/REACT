// NAME IMPORT

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("May 05 2050");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="date-counter-box">
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div className="date-counter-box">
        <button onClick={() => setCount((c) => c - step)}>-</button>
   
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
    </div>
  );
}

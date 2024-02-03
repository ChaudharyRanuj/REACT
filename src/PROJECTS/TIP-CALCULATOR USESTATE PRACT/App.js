// NAME IMPORT

import { useState } from "react";
export default function App() {
  const [bill, setBill] = useState("");
  const [myTip, setMytip] = useState(0);
  const [myFrndTip, setmyFrndTip] = useState(0);
  // Derived value from state
  const average = (bill * myTip + bill * myFrndTip) / 2;
  return (
    <div>
      <Input onBill={setBill} bill={bill} />
      <SelectOptions onTip={setMytip}>
        How did you like the service?
      </SelectOptions>
      <SelectOptions onTip={setmyFrndTip}>
        How did your friend like the service?
      </SelectOptions>
      <Output bill={bill} average={average} />
    </div>
  );
}

function Output({ bill, average }) {
  return (
    <div>
      <p>
        <b>You Pay Rs</b>{" "}
        {`${parseInt(bill) + Math.round(average)} (Rs.${bill} Rs.${Math.round(
          average
        )})`}
      </p>
    </div>
  );
}

function Input({ setBill, bill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        value={bill}
        onChange={(e) => setBill(parseFloat(e.target.value))}
      />
    </div>
  );
}

function SelectOptions({ onTip, children }) {
  return (
    <div>
      <label>{children}</label>
      <select onChange={(e) => onTip(e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={0.05}>it was okay (5%)</option>
        <option value={0.1}>it was good (10%)</option>
        <option value={0.12}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

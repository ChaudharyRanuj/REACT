// NAME IMPORT

import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [myTip, setMytip] = useState(0);
  const [myFrndTip, setmyFrndTip] = useState(0);
  const average = (bill * myTip + bill * myFrndTip) / 2;
  return (
    <div>
      <div>
        <span>How much was the bill?</span>
        <input
          value={bill}
          onChange={(e) => setBill(parseFloat(e.target.value))}
        />
        {bill}
      </div>
      <div>
        <span>How did you like the service?</span>
        <SelectOptions onTip={setMytip} />
        {myTip.toString().padEnd(4,'0')}
      </div>
      <div>
        <span>How did your friend like the service?</span>
        <SelectOptions onTip={setmyFrndTip} />
        {myFrndTip.toString().padEnd(4,'0')}
      </div>
      <div>
        <p>
          <b>You Pay Rs</b>{" "}
          {`${parseInt(bill) + Math.round(average)} (Rs.${bill} Rs.${Math.round(
            average
          )})`}
        </p>
      </div>
    </div>
  );
}

function SelectOptions({ onTip }) {
  return (
    <select onChange={(e) => onTip(e.target.value)}>
      <option value={0}>Dissatisfied (0%)</option>
      <option value={0.05}>it was okay (5%)</option>
      <option value={0.1}>it was good (10%)</option>
      <option value={0.12}>Absolutely amazing! (20%)</option>
    </select>
  );
}

// NAME IMPORT

import { useState } from "react";

export default function App() {
  return (
    <div>
      <p>this is react</p>
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

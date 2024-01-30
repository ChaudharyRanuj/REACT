import { useState } from "react";

// Also include dependency like useState
export default function Form({ onAddItems }) {
  
  // below state is used a value of the input element
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (description === "") return;
    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip?</h3>
        <select
          name="item-list"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, idx) => idx + 1).map((ele) => (
            <option value={ele} key={ele}>
              {ele}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="items..."
          // controlled value by react
          value={description}
          // handling change of state description of input field
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}
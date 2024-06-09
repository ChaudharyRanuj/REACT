import React, { useRef, useState } from "react";

import "./App.css";

function App() {
  let [items, setItems] = useState([]);

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id != id));
  }

  function handlePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app__container">
      <Header />
      <Form onSetItems={setItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPacked={handlePacked}
      />
      <Footer items={items} />
    </div>
  );
}

function Header() {
  return (
    <div className="app__header">
      <h1>Travel Item List</h1>
    </div>
  );
}

function Form({ onSetItems }) {
  let [noOfItems, setNoOfItems] = useState(1);
  let [input, setInput] = useState("");

  function handleAddItem(e) {
    e.preventDefault();
    if (input.length == 0) return;
    let item = {
      count: noOfItems,
      name: input,
      packed: false,
      id: Date.now(),
    };
    onSetItems((items) => [...items, item]);
  }
  return (
    <div className="app__form">
      <div className="app__form__container">
        <form onSubmit={handleAddItem}>
          <select
            name="num"
            id="num"
            value={noOfItems}
            onChange={(e) => setNoOfItems(() => e.target.value)}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Enter Your List Name.."
            value={input}
            onChange={(e) => setInput(() => e.target.value)}
          />
          <button type="submit">Add item</button>
        </form>
      </div>
    </div>
  );
}

function PackingList({ items, onDeleteItem, onPacked }) {
  return (
    <div className="app__packaging__list">
      {items.length > 0 &&
        items.map((item, idx) => (
          <Item
            item={item}
            key={idx}
            onDeleteItem={onDeleteItem}
            onPacked={onPacked}
          />
        ))}
    </div>
  );
}

function Item({ item, onDeleteItem, onPacked }) {
  return (
    <div className="app__item">
      <input type="checkbox" onClick={() => onPacked(item.id)} />
      <p
        className={item.packed ? "item__packed" : ""}
      >{` ${item.count} ${item.name}`}</p>
      <button type="button" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </div>
  );
}

function Footer({ items }) {
  let totalNoOfItems = items.length;
  let packedItems = items.filter((item) => item.packed == true).length;
  const totalPackingDone = (packedItems / totalNoOfItems) * 100;

  return (
    <div
      className={`app__footer  ${
        items.length > 0 && packedItems == totalNoOfItems
          ? "packing__finished"
          : ""
      }`}
    >
      {items.length == 0 && <p>Start Adding items to list.</p>}
      {items.length > 0 && packedItems < items.length && (
        <p>{`Total no of items to Pack ${totalNoOfItems} and Items Packed: ${packedItems}`}</p>
      )}
      {items.length > 0 && packedItems == totalNoOfItems && (
        <p> Packing done you are ready to go.✈✈</p>
      )}
    </div>
  );
}

export default App;

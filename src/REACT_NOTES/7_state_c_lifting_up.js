import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

/*
DATA FLOW THROUGH COMPONENTS
APP >>>>>>>>>>>>>>>>>    <FORM items={items} />     
   items,setItem           (passing prop) 
    (state)         

APP >>>>>>>>>>>>>>>>> <PACKING LIST items={items} onDeleteItems={handleDeleteItem} />    >>>>>>>>>>>> <ITEMS items={items} />     
   items,setItem                                (passing prop)                                         (passing prop)
    (state)                              
   */
export default function App() {
  // LIFTING UP STATE
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItems={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("1");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
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
          placeholder="item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

function PackingList({ items, onDeleteItems, onToggleItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onDeleteItems={onDeleteItems}
              onToggleItems={onToggleItems}
            />
          );
        })}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}-{item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  if (items.length === 0)
    return <p className="stats">Add Some Items to packing List</p>;

  const numLength = items.length;
  const itemPacked = items.filter((item) => item.packed === true).length;
  const percentPacked = Math.floor((itemPacked / numLength) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? `You have packed all the items. You are ready to go ✈`
          : ` You have ${numLength} items in your list, and you are already packed ${itemPacked}`}
        ({percentPacked}%)
      </em>
    </footer>
  );
}

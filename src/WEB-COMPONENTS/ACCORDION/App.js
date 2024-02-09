import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div className="app">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [active, setActive] = useState(null);
  function handleActive(value) {
    setActive(value);
  }
  return (
    <div className="accordion">
      {data.map((ele, i) => (
        <AccordionItem
          active={active}
          onActive={handleActive}
          num={i}
          title={ele.title}
          text={ele.text}
          key={ele.title}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, active, onActive }) {
  // const [isOpen, setIsOpen] = useState(false)

  // // HANDLE FUNCTION
  // function handleToggle() {
  //   setIsOpen(!isOpen)
  // }
  return (
    <div
      className={`item ${num === active ? "open" : ""}`}
      onClick={() => {
        onActive(num);
      }}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>

      <p className="icon">{num === active ? "-" : "+"}</p>
      {/* CONDITIONAL RENDERING HAPPEN IN JAVASCRIPT MODE {}*/}
      {num === active && <div className="content-box">{text}</div>}
    </div>
  );
}

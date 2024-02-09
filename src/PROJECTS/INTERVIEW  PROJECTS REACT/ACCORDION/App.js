import { useState } from "react";

// import { useEffect, useReducer } from "react";
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
  const [enableMultiSel, setEnableMultiSel] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectedId(id) {
    setSelectedId((val)=> val === id ? null : id);
  }
  function handleEnableMultiSel() {
    setEnableMultiSel((value) => (value === true ? false : true));
  }
  return (
    <div className="app">
      <button
        className={enableMultiSel ? "enable" : ""}
        onClick={handleEnableMultiSel}
      >
        {enableMultiSel
          ? "Disable Multiple Selection"
          : "Enable Multiple Selection"}
      </button>
      {faqs.map((ele, index) => (
        <Accordion
          title={ele.title}
          text={ele.text}
          num={index}
          onSelectedId={handleSelectedId}
          selectedId={selectedId}
          enableMultiSel={enableMultiSel}
          key={ele.title}
        />
      ))}
    </div>
  );
}

function Accordion({
  title,
  text,
  num,
  onSelectedId,
  selectedId,
  enableMultiSel,
}) {
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive((value) => (value === false ? true : false));
  }

  return (
    <div className="container">
      <div
        className="accordion"
        onClick={enableMultiSel ? () => onSelectedId(num) : handleActive}
      >
        <p>
          <span>{num + 1}</span> {title}
        </p>
        {!enableMultiSel && <span>{active ? "-" : "+"}</span>}
        {enableMultiSel && (
          <span>
            {selectedId === num && "-"} {selectedId !== num && "+"}
          </span>
        )}
      </div>
      {enableMultiSel ? (
        selectedId === num ? (
          <AccordionElement text={text} />
        ) : null
      ) : (
        active && <AccordionElement text={text} />
      )}
    </div>
  );
}

function AccordionElement({ text }) {
  return (
    <div className="accordion-element">
      <p>{text}</p>
    </div>
  );
}

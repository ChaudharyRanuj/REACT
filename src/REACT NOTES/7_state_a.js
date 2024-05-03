// DEFINING AND UPDATING STATE

/*
1) CREATING STATE

- SIMPLE
const [count, setCount] =  useState(23)


- BASED ON FUNCTION (FUNCTION MUST BE PURE AND ACCEPT NO ARGUMENTS)
const [count, setCount] =  useState(()=> localStorage.getItem('count))


2) UPDATING STATE

- SIMPLE 
setCount(1000);

- BASED ON CURRENT STATE (function must be pure and return next state)
setCount((c) => c+1)

*/

// USING TWO STATE IN COMPONENT
export default function App() {
  // this is know as hook (all function start with use are hooks)
  // Note: 1) applied above of the component
  //       2) never update state variable manually
  // Ex: step = step + 1 XXXX not right way to update
  // STATE IN JAVASCRIPT
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrev() {
    // update state using setStep function
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }
  return (
    // react fragment below
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step{step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={handlePrev}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

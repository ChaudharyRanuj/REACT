/*
WHAT IS COMPONENT?
 
    |   COMPONENT     |
    *******************
    -------------------  
    |   DATA          |   ===> STATE AND PROP
    -------------------
    -------------------
    |   LOGIC         |
    -------------------
    | APPEARANCE: JSX |
    |     HTML        |
    |     CSS         |
    |   JS inside {}  |
    -------------------

NOTE: 
1) WE RIGHT COMPONENT AS FUNCTION IN REACT
2) EACH COMPONENT CAN RETURN ONLY ONE ELEMENT
3) NEVER DECLARE FUNCTION INSIDE APP COMPONENT
*/

/* 
imp: NOT WRITE WAY TO WRITE FUNCTION INSIDE ONE COMPONENT FUNCTION
                    v
                    v

function App() {
  // NEVER DECLARE FUNCTION INSIDE APP COMPONENT
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  function Pizza() {
    return <h2>Pizza</h2>;
  }
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  return <h1>Hello React!</h1>;
}

TYPES OF COMPONENT
1) STATELESS COMPONENT
 Stateful components handle the complex logic and data management. 

2) STATEFULL COMPONENT
stateless components focus on rendering UI elements and promoting code reusability

LINK: https://medium.com/@darshana_18428/understanding-stateful-and-stateless-components-in-reactjs-8f7cee2bf43e
*/

export default function App() {
  // only one element can be return in react
  return (
    <div>
      <h1>Hello React!</h1>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return <h2>Pizza</h2>;
}

/*
WHAT IS JSX? (IS AN EXTENSION OF JAVASCRIPT) FULL FORM: JAVASCRIPT XML
************

- Declaration syntax to describe what components look like
and how they work.

^^^^^^^^^^^^^^^^^^^^^^^^^^^
 
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
  Each block must return only one block of JSX. Which react will use to render the component on the UI.
  
- Components must return a block of JSX.

- Extension of JavaScript that allows us to embed JavaScript, CSS, and React components into HTML.

- Each JSX element is converted to a React.createElement function call.

- We could use React without JSX.
Note: 
*****
This convertion from JSX element to React is done by BABEL tool

Impretive VS Declarative Syntax
******************************

Impretive
**********
- manual DOM element selection and DOM traversing.
- step by step DOM mutation until we reach the desired UI.


Declarative
***********
- REACT is abstraction away from DOM, we never touch DOM.
- 

RULES OF JSX
************

- JSX works essentially like HTML, but we can enter "Javascript mode" by using {} (for text or attributes)
- We can place JavaScript Expression inside {}. Examples: reference variables, create arrays
or objects, [].map(), ternary operator.
- Statements are not allowed (if/else, for, switch)

- JSX produces JAVASCRIPT Expression.
const el = <h1>Hello React!</h1> 
const el = React.createElement("h1", null, "Hello React!")

Note: 1) We can place other pieces of JSX inside {} (curly brackets)
      2) We can write JSX anywhere inside a component (in if/else, assign to variables, pass it into functions)
- A piece of JSX can only have one root element. If you need more, use <React.Fragment> (or the short <>)

*/

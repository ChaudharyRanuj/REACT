// What is render Logic ?

/*
1) RENDER LOGIC
- code that lives at the top level of the component function.
- Participates in describing how the component view looks like
- Executed every time the component renders.

2) EVENT HANDLER FUNCTIONS
- Executed as consequence of the event that the handler is listening for.
- Code that actually does things : update state, perform an HTTP request,
read an input field, navigate to another page etc.

PURE FUNCTIONS
**************

FUNCTIONAL PROGRAMMIN PRINCIPLES

SIDE EFFECT:
Dependency on or modification of any data outside the function scope. "Interaction with the outside
world".
Examples: Mutating external varibales, HTTP requests, writing to DOM.


INPURE FUNCTION

const areas = {}
function circleArea(r) {
  areas.circle = 3.14 * r * r; // side effect variable mutation
}

PURE FUNCTION 
A function that has no side effects
- does not change any varibles outside its scope.
- Given the same input, a pure function always returns the same output.

Example 1:
function circleArea(r) {
  return 3.14 * r * r;
}


RULES FOR RENDER LOGIC
***********************

- Components must be pure when it comes to render logic: given the same groups (input), a component 
instance should always return the same JSX(output).
- Render logic must produce no side effects: no interaction with the " outside world" is allowed.
So, in render Logic:

* Do Not perform network requests (API Calls)
* Do Not start timers.
* Do Not directly use the DOM API.
* Do Not mutate objects or variables outside of the function scope.
* Do Not update state (or refs): this will create an infinite loop!

Note: 
Side effects are allowed (and encouraged) in event handler functions!
There is also special hook to register side effects (useEffect)







*/

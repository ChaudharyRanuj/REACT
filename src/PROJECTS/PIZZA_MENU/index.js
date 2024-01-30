import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
// Note: webpack will take care for including the css to html elements


// RENDERING THE ROOT COMPONENT AND STRICT MODE
// **********************************************

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
NOTE: 
STRICT MODE
- React's Strict mode helps developers identify and fix issues in their code.
- Strict mode runs in development mode and can be enabled by adding a component at the beginning of the application. 
- It checks for potential problems in the code, such as possible memory leaks, and warns the user about their presence.

StrictMode currently helps with:

Identifying components with unsafe lifecycles
Warning about legacy string ref API usage
Warning about deprecated findDOMNode usage
Detecting unexpected side effects
Detecting legacy context API
Ensuring reusable state
*/ 
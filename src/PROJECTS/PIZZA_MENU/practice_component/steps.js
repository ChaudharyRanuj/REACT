import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Note: webpack will take care for including the css to html elements

// RENDERING THE ROOT COMPONENT AND STRICT MODE
// **********************************************

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

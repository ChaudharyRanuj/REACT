import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles.css";

// RENDERING THE ROOT COMPONENT AND STRICT MODE
// **********************************************

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

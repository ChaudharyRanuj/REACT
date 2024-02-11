import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AccordionComp from "./components/accordion/accordion";
import StarRating from "./components/star-rating";

// RENDERING THE ROOT COMPONENT AND STRICT MODE
// **********************************************

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AccordionComp /> */}
    {/* <StarRating noOfStars={10}/> */}
    
  </React.StrictMode>
);

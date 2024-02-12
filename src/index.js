import React from "react";
import ReactDOM from "react-dom/client";
import LoadData from "./components/load-more-button";
// import App from "./App";
// import AccordionComp from "./components/accordion/accordion";
// import StarRating from "./components/star-rating";
// import ImageSlider from "./components/slider";



// RENDERING THE ROOT COMPONENT AND STRICT MODE
// **********************************************

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AccordionComp /> */}
    {/* <StarRating noOfStars={10}/> */}
    {/* <ImageSlider url={'https://picsum.photos/v2/list?'} page={1} limit={10}/> */}
  <LoadData/>  
  </React.StrictMode>
);

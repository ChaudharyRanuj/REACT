import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import LoadData from "./components/load-more-button";
// import AccordionComp from "./components/accordion/accordion";
// import StarRating from "./components/star-rating";
// import ImageSlider from "./components/slider";
// import QRCodeGenerator from "./components/qr-code-generator";
// import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-progress-indicator/ScrollIndicator";

// RENDERING THE ROOT COMPONENT AND STRICT MODE
// **********************************************

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AccordionComp /> */}
    {/* <StarRating noOfStars={10}/> */}
    {/* <ImageSlider url={'https://picsum.photos/v2/list?'} page={1} limit={10}/> */}
    {/* <LoadData/>   */}
    {/* <QRCodeGenerator/> */}
    {/* <LightDarkMode /> */}
    <ScrollIndicator />
  </React.StrictMode>
);

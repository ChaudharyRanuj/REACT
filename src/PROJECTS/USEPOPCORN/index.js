// DEFAULT IMPORT
import React from 'react';
// DEFAULT IMPORT
import ReactDOM from 'react-dom/client';
import './index.css';
// DEFAULT IMPORT
import App from './App';
// import StartRating from './StarRating';


// RENDERING 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <StartRating maxRating={5}/>
   <StartRating maxRating={10}/>
   <StartRating/> */}
    <App />
  </React.StrictMode>
);



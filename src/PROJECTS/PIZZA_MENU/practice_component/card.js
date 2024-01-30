import React from "react";
import ReactDOM from "react-dom/client";
import "./card.css";
// Note: webpack will take care for including the css to html elements

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img src="card/IMG_9092.jpg" alt="" className="avatar" />;
}
function Intro() {
  return (
    <div>
      <h1>Ranuj Chaudhary</h1>
      <p>
        Front End Developer and trainer. When not coding, spending time with
        friends and family. I love to take for my health by doing running and
        yoga in morning and eating healthy food.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
     <Skill skill='React and Javascript' color='#ffd196' />
     <Skill skill='HTML' color='#ffd196' />
     <Skill skill='CSS' color='#ffd196' />
     <Skill skill='PYTHON' color='#ffd196' />
     </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <p>{props.skill}</p>
      <img className="skill-icon" src="card/logo.png" alt="Logo" />
    </div>
  );
}

// RENDERING THE ROOT COMPONENT AND STRICT MODE
// **********************************************

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Note: webpack will take care for including the css to html elements
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 60,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 100,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 120,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 120,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 150,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 180,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  // only one element can be return in react
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // LOGIC
  // WRITING LOGIC INSIDE THE FUCNTION COMPONENT
  // const hour = new Date().getHours();
  // if (hour < 10) {
  //   console.log("Sorry Wr're closed.(Open Hours 10:00 AM to 10:00 PM)");
  // } else {
  //   console.log("Wr're open now");
  // }

  return (
    <header className="header">
      <h1
        style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}
      >
        Fast React Pizza Co.
      </h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const noOfPizza = pizzas.length;
  return (
    <>
      <p>
        Order Delicios Italian Pizza made by the most famous Cook Jorge Silvesta
        Diloste.
      </p>

      <main className="menu">
        <h2>Our menu</h2>
        {noOfPizza > 0 ? (
          <ul className="pizzas">
            {/* REDERING LIST OF AN ARRAY*/}
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        ) : (
          <p>We're working on our recepies.</p>
        )}
      </main>
    </>
  );
}
function Pizza({ pizzaObj: pizza }) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={pizza.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizza.photoName} alt="Pizza Prosciutto" />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>Rs.{pizza.price}</span>
        <span
          className={pizza.soldOut ? "center-align" : "center-align in-stock"}
        >
          {pizza.soldOut ? "" : "In Stock"}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // isOpen is truthy or falsy value
  // falsy values :-   null, undefined, "", 0

  // returning jsx
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We're currently open until {closeHour}:00 PM. Come visit us order
            online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

// React v18

// RENDERING THE ROOT COMPONENT AND STRICT MODE
// **********************************************

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// UN-USED CODE

// function NavMenu() {
//   return (
//     <nav className="nav-menu">
//       <ul>
//         <li>
//           <a href="index.html">Home</a>
//         </li>
//         <li>
//           <a href="card.html">Card</a>
//         </li>
//       </ul>
//     </nav>
//   );

// RENDERING ARRAY
// TYPE ONE
function Menu() {
  return (
    <main className="menu">
      <h2>Menu</h2>
      <ul className="pizzas">
        {/* REDERING LIST OF AN ARRAY*/}
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}

// TYPE TWO


// RENDERING TRUTHY OR FALSY VALUES
// ****************************************

// NOTE: REACT NEVER RENDER TRUE OF FALSE VALUE
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
      {isOpen ? (
        <div className="order">
          <p>
            We're currently open until {closeHour}:00 PM. Come visit us order
            online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : null}
    </footer>
  );
}

// INSTEAD OF USING NUMBER CONVERT IT TO BOOLEAN
function Menu() {
  const pizzas = pizzaData;
  const noOfPizza = pizzas.length;
  return (
    // INSTEAD OF USING NUMBER CONVERT IT TO BOOLEAN
    noOfPizza > 0 && (
      <main className="menu">
        <h2>Menu</h2>
        <ul className="pizzas">
          {/* REDERING LIST OF AN ARRAY*/}
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      </main>
    )
  );
}

// CONDITIONAL RENDERING WITH TERNARIES
// Note:
// 1) using ternary operator
// EXAMPLE ONE:
function Menu() {
  const pizzas = pizzaData;
  const noOfPizza = pizzas.length;
  return (
    // USING TERNARY OPERATOR
    noOfPizza > 0 ? (
      <main className="menu">
        <h2>Menu</h2>
        <ul className="pizzas">
          {/* REDERING LIST OF AN ARRAY*/}
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      </main>
    ) : null
  );
}

// EXAMPLE TWO:
function Menu() {
  const pizzas = pizzaData;
  const noOfPizza = pizzas.length;
  return (
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
        <p>We're working on our recepies. Please come back later </p>
      )}
    </main>
  );
}
// 2) Using conditional statements (if else)
function Pizza(props) {
  const { pizzaObj } = props;

  // using if conditional statement
  if (pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt="Pizza Prosciutto" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>Rs.{pizzaObj.price}</span>
      </div>
    </li>
  );
}

// CHANGING CSS AND INNER TEXT CONDITIONALY

function Pizza(props) {
  const { pizzaObj } = props;

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={pizzaObj.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizzaObj.photoName} alt="Pizza Prosciutto" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>Rs.{pizzaObj.price}</span>
        <span
          className={
            pizzaObj.soldOut ? "center-align" : "center-align in-stock"
          }
        >
          {pizzaObj.soldOut ? "" : "In Stock"}
        </span>
      </div>
    </li>
  );
}

// WITH REACT FRAGMENTS WE CAN SEND THE MULTIPLE ELEMENTS

/*
FULL SYNTAX
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}

SORT SYNTAX
render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
}

*/
function Menu() {
  const pizzas = pizzaData;
  const noOfPizza = pizzas.length;
  return (
    <React.Fragment>
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
        )}****
      </main>
    </React.Fragment>
  );
}

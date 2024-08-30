/*
As per React’s official documentation, Render Prop refers to a technique that involves passing a function
 as a prop to a component, allowing the component to render content based on the logic provided by that function.

In the Render Props design pattern, a component is structured to accept a function that produces a React Element
 as one of its props. Rather than relying on its own fixed rendering logic, the component invokes this provided
  function to determine what content to display.

This approach allows for more flexibility as it avoids embedding specific rendering instructions within 
each component, offering a dynamic and customizable way to determine how the content should be presente

*/
// EXAMPLE 1ST
const products = [
  {
    id: 1,
    title: "Product 1",
    description: "This is product 1",
  },
  {
    id: 2,
    title: "Product 2",
    description: "This is product 2",
  },
  {
    id: 3,
    title: "Product 3",
    description: "This is product 3",
  },

  // ...
];

const Products = ({ render }) => {
  // Fetching products can be done here.
  return <>{render(products)}</>;
};

// EXAMPLE 2
function Input(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {props.renderKelvin({ value: value + 273.15 })}
      {props.renderFahrenheit({ value: (value * 9) / 5 + 32 })}
    </>
  );
}

export default function App() {
  return (
    <Input
      renderKelvin={({ value }) => <div className="temp">{value}K</div>}
      renderFahrenheit={({ value }) => <div className="temp">{value}°F</div>}
    />
  );
}

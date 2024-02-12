import { useEffect, useState } from "react";
import "./style.css";

function LoadData() {
  const [loading, setLoading] = useState(false);
  const [products, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  function handleCount() {
    setCount((count) => count + 1);
  }

  useEffect(
    function () {
      async function fetchProductData() {
        try {
          setLoading(true);
          const res = await fetch(
            `https://dummyjson.com/products/?limit=20&skip=${
              count === 0 ? 0 : count * 20
            }`
          );
          if (!res.ok) {
            throw Error("Not able to fetch the data..");
          }
          const data = await res.json();
          if (data && data.products && data.products.length) {
            setProduct((prevData) => [...prevData, ...data.products]);
            setLoading(false);
          }
        } catch (err) {
                setLoading(false);
        }
      }
      fetchProductData();
    },
    [count]
  );

  useEffect(() => {
    if (products && products.length === 100) {
      setDisabled(true);
    }
  }, [products]);

  if (loading)
    return (
      <div className="product-container">
        <p>Fetching Product data.....</p>
      </div>
    );

  return (
    <>
      <div className="product-container">
        {products && products.length
          ? products.map((ele) => <Product product={ele} key={ele.id} />)
          : null}
      </div>
      <button disabled={disabled} onClick={handleCount}>
        Load More Data
      </button>
    </>
  );
}

function Product({ product }) {
  return (
    <div className="product">
      <div className="image">
        <img src={product.thumbnail} alt="" />
      </div>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Rs. {product.price}</p>
        <span>Rating: {product.rating}</span>
      </div>
    </div>
  );
}

export default LoadData;

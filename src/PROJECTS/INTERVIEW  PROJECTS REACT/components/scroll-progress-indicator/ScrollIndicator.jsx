import { useEffect, useState } from "react";
import styles from "./ScrollIndicator.module.css";
function ScrollIndicator() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [errorMessage, setError] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);

  function handleScrollIndicator() {
    const currentHeight =
      document.body.scrollTop || document.documentElement.scrollTop;

    const totalScrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    console.log(totalScrollHeight, currentHeight);
    setScrollPercent((currentHeight / totalScrollHeight) * 100);
  }

  useEffect(function () {
    async function fetchProducts() {
      try {
        setIsloading(true);
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          throw Error("Problem fetching the products details");
        }
        const data = await res.json();

        if (data) {
          setProducts(data.products);
        }
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsloading(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollIndicator);

    return () => {
      window.removeEventListener("scroll", handleScrollIndicator);
    };
  }, []);

  if (isLoading)
    return (
      <div>
        <p>Loading data please wait...</p>
      </div>
    );

  if (errorMessage)
    return (
      <div>
        <p>{errorMessage}</p>
      </div>
    );

  return (
    <div className={styles.container}>
      <div className={`${styles.progress_container}`}>
        <div
          style={{ width: `${scrollPercent}%` }}
          className={`${styles.progress_bar}`}
        ></div>
      </div>
      {products && products.length > 0
        ? products.map((ele, i) => <p key={i}>{ele.title}</p>)
        : null}
    </div>
  );
}

export default ScrollIndicator;

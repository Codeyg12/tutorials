import React, { useEffect, useState } from "react";
import "./LoadMore.css";

const LoadMore = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await res.json();

      if (data && data.products && data.products.length > 0) {
        setProducts((prev) => [...prev, ...data.products]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisable(true);
  }, [products]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="btn-container">
        <button disabled={disable} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disable && <p>No more products to load</p>}
      </div>
    </div>
  );
};

export default LoadMore;

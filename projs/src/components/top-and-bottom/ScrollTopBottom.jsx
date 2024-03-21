import React from "react";
import useFetch from "../use-fetch/useFetch";

const ScrollTopBottom = () => {
  const { data, error, loading } = useFetch("https://dummyjson.com/products");

  const handleScroll = (name) => {
    if (name === "bottom") window.scrollTo(0, document.body.scrollHeight);
    if (name === "top") window.scrollTo(0, 0);
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Scroll to Top and Bottom</h1>
      <h2>This is the top section</h2>
      <button onClick={() => handleScroll("bottom")}>Scroll to bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data?.products?.length &&
          data.products.map((product, index) => (
            <li key={index} style={{ margin: "10px 0" }}>
              {product.title}
            </li>
          ))}
      </ul>
      <button onClick={() => handleScroll("top")}>Scroll to top</button>
      <h1>Bottom of the page</h1>
    </div>
  );
};

export default ScrollTopBottom;

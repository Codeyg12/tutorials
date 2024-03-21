import React, { useEffect, useState } from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.products);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const scrolledAmount =
      document.body.scrollTop || document.documentElement.scrollTop;
    const docuHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollProgress((scrolledAmount / docuHeight) * 100);
  };

  console.log(scrollProgress);

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [scrollProgress]);

  return (
    <div>
      <div className="top-container">
        <h2>Custom Scroll Indicator</h2>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((item) => <p>{item.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;

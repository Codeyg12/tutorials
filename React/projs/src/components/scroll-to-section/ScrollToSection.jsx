import React, { useRef } from "react";

const ScrollToSection = () => {
  const handleScroll = (name) => {
    const element = document.getElementById(name);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "500px",
        backgroundColor: "red",
      },
      id: 1,
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "500px",
        backgroundColor: "blue",
      },
      id: 2,
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "500px",
        backgroundColor: "green",
      },
      id: 3,
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "500px",
        backgroundColor: "yellow",
      },
      id: 4,
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "500px",
        backgroundColor: "purple",
      },
      id: 5,
    },
  ];
  return (
    <div>
      <h2>Scroll to Section</h2>
      <div>
        <button onClick={() => handleScroll(1)}>Scroll to First Card</button>
        <button onClick={() => handleScroll(2)}>Scroll to Second Card</button>
        <button onClick={() => handleScroll(3)}>Scroll to Third Card</button>
        <button onClick={() => handleScroll(4)}>Scroll to Fourth Card</button>
        <button onClick={() => handleScroll(5)}>Scroll to Fifth Card</button>
      </div>
      {data.map((item, index) => (
        <div key={index} style={item.style} id={item.id}>
          <h3>{item.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;

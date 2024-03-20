import React, { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#a2f");

  const createRandomHex = () => {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };
  const createRandomRgb = () => {
    let randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
    setColor(randomColor);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: color }}>
      <div style={{ display: "flex", justifyContent: "space-evenly", padding: '20px' }}>
        <button onClick={createRandomRgb}>Create RGB color</button>
        <button onClick={createRandomHex}>Create HEX color</button>
      </div>
      <h2>{color}</h2>
    </div>
  );
};

export default RandomColor;

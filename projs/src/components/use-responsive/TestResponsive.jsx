import React from "react";
import useWindowResize from "./useResponsive";

const TestResponsive = () => {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div>
      <h1>Window Resixe</h1>
      <p>width is {width}</p>
      <p>height is {height}</p>
    </div>
  );
};

export default TestResponsive;

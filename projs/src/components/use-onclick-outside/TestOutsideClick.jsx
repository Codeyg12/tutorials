import React, { useRef, useState } from "react";
import useOnClickOutside from "./useOnClickOutside";

const TestOutsideClick = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h2>Random</h2>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default TestOutsideClick;

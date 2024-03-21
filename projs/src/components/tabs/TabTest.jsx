import React from "react";
import Tabs from "./Tabs";

const RandomComponent = () => {
  return <h2>Some randomness lol </h2>;
};

const TabTest = () => {
  const tabs = [
    { label: "Tab 1", content: <div>Tab 1 Content</div> },
    { label: "Tab 2", content: <div>Tab 2 Content</div> },
    { label: "Tab 3", content: <RandomComponent /> },
  ];

  const handleTabChange = (index) => {
    console.log(index);
  };

  return <Tabs tabContent={tabs} onChange={handleTabChange} />;
};

export default TabTest;

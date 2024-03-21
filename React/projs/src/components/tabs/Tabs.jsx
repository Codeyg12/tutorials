import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ tabContent, onChange }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleOnClick = (index) => {
    setCurrentTab(index);
    onChange(index);
  };

  return (
    <div className="tab-wrapper">
      <div className="tab-header">
        {tabContent.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleOnClick(idx)}
            className={`tab-item ${currentTab === idx ? "active" : ""}`}
          >
            <span className="tab-label">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabContent[currentTab] && tabContent[currentTab].content}
      </div>
    </div>
  );
};

export default Tabs;

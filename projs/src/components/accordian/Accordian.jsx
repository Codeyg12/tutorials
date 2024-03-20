import React, { useState } from "react";
import data from "./data";
import "./Accordian.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    let cpyMultiple = [...selectedItems];
    const findIndex = cpyMultiple.indexOf(id);

    if (findIndex === -1) {
      cpyMultiple.push(id);
    } else {
      cpyMultiple.splice(findIndex, 1);
    }

    setSelectedItems(cpyMultiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setMultiSelect(!multiSelect)}>
        Enable Multiple Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="item">
              <div
                onClick={
                  multiSelect
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="title"
              >
                <h2>{item.question}</h2>
                <span>+</span>
              </div>
              {!multiSelect
                ? selected === item.id && (
                    <div className="content">{item.answer}</div>
                  )
                : selectedItems.indexOf(item.id) !== -1 && (
                    <div className="content">{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;

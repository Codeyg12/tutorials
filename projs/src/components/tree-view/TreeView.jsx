import React from "react";
import "./TreeView.css";
import MenuList from "./MenuList";

const TreeView = ({ menus = [] }) => {
  return (
    <div className="tree-container">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;

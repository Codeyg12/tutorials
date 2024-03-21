import React, { useContext } from "react";
import { FeatureFlagContext } from "./context/FeatureFlagContext";
import ThemeSwitch from "../theme-switch/ThemeSwitch";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import RandomColor from "../random-color/RandomColor";
import Accordian from "../accordian/Accordian";
import TreeView from "../tree-view/TreeView";
import menus from "../tree-view/data";
import TabTest from "../tabs/TabTest";

const FeatureFlag = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagContext);
  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <ThemeSwitch />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
      key: "showTabs",
      component: <TabTest />,
    },
  ];

  const checkIfComponentIsEnabled = (key) => {
    return enabledFlags[key];
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      FeatureFlag
      {componentsToRender.map(
        (component) =>
          checkIfComponentIsEnabled(component.key) && component.component
      )}
    </div>
  );
};

export default FeatureFlag;

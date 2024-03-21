import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./ThemeSwitch.css";

const ThemeSwitch = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="theme-container">
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default ThemeSwitch;

import React, { useEffect, useState } from "react";

const useLocalStorage = (key, defaultVal) => {
  const [value, setValue] = useState(() => {
    let currentVal;

    try {
      currentVal = JSON.parse(localStorage.getItem(key) || String(defaultVal));
    } catch (err) {
      console.error(err);
      currentVal = defaultVal;
    }
    return currentVal;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;

import { useEffect } from "react";
import { useState } from "react";

function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(function () {
    let currTheme;

    try {
      currTheme = JSON.parse(localStorage.getItem(key)) || String(defaultValue);
    
    } catch (err) {
      currTheme = defaultValue;
    }
    return currTheme;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}

export default useLocalStorage;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDarkTheme") === "true"
  );
  useEffect(() => {
    localStorage.setItem("isDarkTheme", isDark);
  }, [isDark]);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
      {isDark && (
        <style>{`body{
        background-color: black;
        color: white;
      }`}</style>
      )}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;

import { createContext, useContext, useState, useEffect } from "react";

const defaultObj = {};
const ThemeContext = createContext(defaultObj);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("storedTheme")) ?? "light-theme"
  );

  useEffect(() => {
    localStorage.setItem("storedTheme", JSON.stringify(theme));
    document.body.classList.add(theme);
  });

  const valueObj = { theme, setTheme };

  return (
    <ThemeContext.Provider value={valueObj}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };

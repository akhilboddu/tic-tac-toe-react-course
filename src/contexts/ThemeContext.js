// "light" === lightMode, "dark" === darkMode
import { useState, createContext } from "react";

export const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

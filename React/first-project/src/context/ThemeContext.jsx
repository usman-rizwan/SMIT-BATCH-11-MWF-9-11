// createContext => context banane ke lye
// useContext    => context se value ko get krne ke lye

import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

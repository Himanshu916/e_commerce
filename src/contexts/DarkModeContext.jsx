import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );

  const toggleDarkMode = function () {
    setDarkMode((state) => !state);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("Consuming DarkMode context out of DarkMode provider");

  return context;
}

export default DarkModeProvider;

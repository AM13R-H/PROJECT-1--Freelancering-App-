import { createContext, useContext, useEffect, useState } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

const darkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useLocalStorage(
        "isDarkMode",
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
    
    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <darkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(darkModeContext);

  if (context === undefined)
    throw new Error('this toggle to dark mode is out side of context!');
  return context;
}

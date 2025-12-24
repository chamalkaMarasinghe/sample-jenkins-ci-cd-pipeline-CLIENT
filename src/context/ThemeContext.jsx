import { createContext, useContext, useEffect, useState } from 'react';
import commonConstants from '../constants/commonConstants';

const ThemeContext = createContext();

export const themes = {
  light: 'light',
  dark: 'dark'
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved && Object.values(themes).includes(saved)) {
      return saved;
    }

// check system preference for dark mode
// NOTE: prefers-color-scheme is a CSS media feature that tells whether the user has set their system (OS/browser) to light mode or dark mode.

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return themes.dark;
    }

    return themes.light;
  });

  useEffect(() => {
    // apply theme class to root element
    const root = document.documentElement;

    // remove all theme classes
    Object.values(themes).forEach((t) => {
      root.classList.remove(`theme-${t}`);
    });

    root.classList.add(`theme-${theme}`);
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const changeTheme = (newTheme) => {
    if (Object.values(themes).includes(newTheme)) {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
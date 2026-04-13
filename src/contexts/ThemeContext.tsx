import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

const COLOR_OPTIONS = [
  { name: 'blue', color: '#1B3A6B' },
  { name: 'red', color: '#C8102E' },
  { name: 'green', color: '#00855A' },
  { name: 'purple', color: '#8B1AC8' },
  { name: 'orange', color: '#C87200' },
];

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

function setCookie(name, value, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getAutoTheme() {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? 'light' : 'dark';
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => getCookie('theme_mode') || 'auto');
  const [colorTheme, setColorThemeState] = useState(() => getCookie('color_theme') || 'blue');

  const resolvedTheme = mode === 'auto' ? getAutoTheme() : mode;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme]);

  useEffect(() => {
    if (colorTheme === 'blue') {
      document.documentElement.removeAttribute('data-color');
    } else {
      document.documentElement.setAttribute('data-color', colorTheme);
    }
  }, [colorTheme]);

  const toggleTheme = useCallback(() => {
    setMode(prev => {
      const next = prev === 'auto' ? 'light' : prev === 'light' ? 'dark' : 'auto';
      setCookie('theme_mode', next);
      return next;
    });
  }, []);

  const setColorTheme = useCallback((color) => {
    setColorThemeState(color);
    setCookie('color_theme', color);
  }, []);

  return (
    <ThemeContext.Provider value={{
      mode,
      resolvedTheme,
      toggleTheme,
      colorTheme,
      setColorTheme,
      COLOR_OPTIONS,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}

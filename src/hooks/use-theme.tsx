
import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light' | 'system';

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    return savedTheme || 'system';
  });

  // Determine if the site should use dark mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return theme === 'dark';
  });

  // Update the theme when it changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle theme changes
  useEffect(() => {
    switch (theme) {
      case 'dark':
        setIsDarkMode(true);
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        setIsDarkMode(false);
        localStorage.setItem('theme', 'light');
        break;
      case 'system':
        setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
        localStorage.setItem('theme', 'system');
        break;
    }
  }, [theme]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        setIsDarkMode(mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return { theme, setTheme, isDarkMode };
}

export default useTheme;

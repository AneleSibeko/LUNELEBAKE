// components/ThemeToggle.js
import React from 'react';
import { useTheme } from './ThemeContext'; // Import from same folder

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
import React from 'react';

export const themes = {
  light: {
    backgroundColor: '#000',
    color: '#fff'
  },
  dark: {
    backgroundColor: '#191919',
    color: 'rgba(250, 250, 250, 0.6)'
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
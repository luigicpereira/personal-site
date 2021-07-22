import React, { useState, createContext, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import CustomThemeContext from './CustomThemeContext';

import GlobalStyle from '../styles/global';
import lightTheme from '../styles/themes/light';
import darkTheme from '../styles/themes/dark';

const CustomThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = useCallback(() => {
    setCurrentTheme(previousTheme =>
      previousTheme.name === 'light' ? darkTheme : lightTheme,
    );
  }, []);

  return (
    <CustomThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;

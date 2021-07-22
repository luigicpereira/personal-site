import { createContext } from 'react';

interface ThemeContextProps {
  toggleTheme(): void;
}

const defaultValue: ThemeContextProps = {
  toggleTheme: () => {},
};

const CustomThemeContext = createContext<ThemeContextProps>(defaultValue);

export default CustomThemeContext;

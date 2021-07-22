import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: Roboto, sans-serif;
    transition: all 0.3s;
  }

  button {
    cursor: pointer;
    border: 0;
    background: none;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    font: 400 16px;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', Arial, Helvetica, sans-serif;
    background-color: ${props => props.theme.backgroundColor};
    transition: background-color 300ms linear;
    color: rgba(250, 250, 250, 0.6);
    letter-spacing: 1px;
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-family: 'Playfair Display', 'Palatino', 'Times New Roman', Times, serif;
  }
`;

export default GlobalStyle;
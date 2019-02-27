import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', Arial, Helvetica, sans-serif;
    line-height: 1.6 !important;
    background-color: ${props => props.theme.backgroundColor};
    transition: background-color 300ms linear;
    color: ${props => props.theme.color};
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3 {
    font-family: 'Playfair Display', 'Palatino', 'Times New Roman', Times, serif;
    margin: 0 !important;
  }
`;

export default GlobalStyle;
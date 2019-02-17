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

  h1,
  h2 {
    font-family: 'Playfair Display', 'Palatino', 'Times New Roman', Times, serif;
    font-size: calc(28px + (64 - 28) * ((100vw - 320px) / (1700 - 320))) !important;
    line-height: 1.7 !important;
    letter-spacing: 2px !important;

    @media (min-width: 1700px) {
      font-size: 64px !important;
    }

    @media (max-width: 320px) {
      font-size: 28px !important;
    }
  }
`;

export default GlobalStyle;
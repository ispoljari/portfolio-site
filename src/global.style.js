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

  h1 {
    font-size: calc(28px + (64 - 28) * ((100vw - 320px) / (1700 - 320))) !important;
  
    @media (min-width: 1700px) {
      font-size: 64px !important;
    }

    @media (max-width: 320px) {
      font-size: 28px !important;
    }
  }

  h2 {
    font-size: calc(28px + (46 - 28) * ((100vw - 320px) / (1700 - 320)));
  
    @media (min-width: 1700px) {
      font-size: 46px;
    }

    @media (max-width: 320px) {
      font-size: 28px;
    }
  }
`;

export default GlobalStyle;
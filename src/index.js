import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components';
import GlobalStyle from './global.style';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

const theme = {
  // backgroundColor: 'white'
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Normalize />
      <GlobalStyle/>
      <App />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root')
);

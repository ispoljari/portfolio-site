import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components';
import GlobalStyle from './global.style';
import { Normalize } from 'styled-normalize';

ReactDOM.render(
  <React.Fragment>
    <Normalize />
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

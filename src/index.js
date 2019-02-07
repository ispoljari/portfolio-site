import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import GlobalStyle from './global.style';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components';
import { Normalize } from 'styled-normalize';

ReactDOM.render(
  <React.Fragment>
    <Normalize />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

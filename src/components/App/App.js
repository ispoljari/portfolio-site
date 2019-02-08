import React, { Component } from 'react';

import { Home, Matrix } from '../index';
import { showLoader, hideLoader } from '../../util';

class App extends Component {
  componentDidMount() {
    hideLoader();

  }

  render() {
    return (
      <React.Fragment>
        <Matrix />
        <Home />
      </React.Fragment>      
    );
  }
}

export default App;

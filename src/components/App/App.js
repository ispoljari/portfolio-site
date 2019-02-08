import React, { Component } from 'react';

import { Home, Matrix } from '../index';

class App extends Component {
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

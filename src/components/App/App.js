import React, { Component } from 'react';

import { Home, Matrix } from '../index';
import { hideLoader } from '../../util';
import * as Styled from './App.style';

class App extends Component {
  state = {
    visible: false
  };

  componentDidMount() {
    hideLoader();
    this.setState({
      visible: true
    });
  }

  render() {
    const { visible } = this.state;
    return (
      <React.Fragment>
        <Styled.Box
          visible={visible}
        >
          <Matrix />
          <Home />
        </Styled.Box>
      </React.Fragment>      
    );
  }
}

export default App;

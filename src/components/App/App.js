import React, { Component } from 'react';

import { Home, Matrix } from '../index';

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({
      loading: false
    })
  }

  render() {
    const { loading } = this.state;

    if(loading) {
      return null;
    }
    
    return (
      <React.Fragment>
        <Matrix />
        <Home />
      </React.Fragment>      
    );
  }
}

export default App;

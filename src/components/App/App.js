import React, { Component } from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';

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
        <Matrix />
        <Styled.Box
          visible={visible}
        >
          <Grid>
            <Row>
              <Col>
                {/* <Navigation /> */}
              </Col>
            </Row>
            <Row>
              <Col>
                <Home />
              </Col>
            </Row>
          </Grid>      
        </Styled.Box>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Navigation, About, Portfolio } from '../index';
import { hideLoader, waitForExternalFontsLoad } from '../../util';
import * as Styled from './App.style';

class App extends Component {
  state = {
    visible: false
  };

  execAfterFontLoadEval = () => {
    hideLoader();
    this.setState({
      visible: true
    });
  };

  componentDidMount() {
    waitForExternalFontsLoad()
    .then(() => {
      hideLoader();
      this.execAfterFontLoadEval();
    })
    .catch(() => {
      this.execAfterFontLoadEval();
    });
  };

  render() {
    const { visible } = this.state;

    return (
      <React.Fragment>
        <Styled.InitialFadeInBox
          visible={visible}
          >
          <Grid 
            fluid
            px={0}
            mx={0}
            >
            <Router>
              <Row
                mx={0}
                px={15}
              >
                <Col
                  px={0}
                >
                  <Navigation />
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/portfolio" component={Portfolio}/>
                </Col>
              </Row>
            </Router>
          </Grid>  
        </Styled.InitialFadeInBox>
      </React.Fragment>
    );
  }
}

export default App;

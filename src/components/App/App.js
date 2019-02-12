import React, { Component } from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from '../../global.style';
import { Pages, Navigation } from '../index';
import { hideLoader, FONT_LATO, FONT_PLAYFAIR } from '../../util';
import * as Styled from './App.style';

class App extends Component {
  state = {
    visible: false,
  };

  execAfterFontLoadEval = () => {
    hideLoader();
    this.setState({
      visible: true
    });
  };

  componentDidMount() {
    Promise.all([FONT_LATO.load(), FONT_PLAYFAIR.load()]) 
      .then(() => {
        // If google fonts have successfully loaded, show main screen
        this.execAfterFontLoadEval();
      })
      .catch(() => {
        // If google fonts have not successfully loaded, show main screen anyway, but with fallback fonts specified in global styles
        this.execAfterFontLoadEval();
      });
  };

  render() {
    const { visible } = this.state;

    return (
      <React.Fragment>
        <GlobalStyle/>
        <Styled.InitialFadeInBox
          visible={visible}
          >
          <Grid 
            fluid
            px={0}
            mx={0}
            >
            <Row
              mx={0}
              px={15}
              >
              <Col
                px={0}
                >
                <Router> 
                  <React.Fragment>
                    <Navigation />
                    <Pages />
                  </React.Fragment>
                </Router>
              </Col>
            </Row>
          </Grid>  
        </Styled.InitialFadeInBox>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Home, Navigation, About, Portfolio } from '../index';
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
                    <TransitionGroup>
                      <CSSTransition
                        key={this.props.location}
                        timeout={{ enter: 300, exit: 300}}
                      >
                        <Switch>
                          <Route 
                            exact 
                            path="/" 
                            component={Home}
                          />
                          <Route 
                            path="/about" 
                            component={About}
                          />
                          <Route 
                            path="/portfolio" 
                            component={Portfolio}
                          />
                        </Switch>
                      </CSSTransition>
                    </TransitionGroup>
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

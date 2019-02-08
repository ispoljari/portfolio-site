import React, { Component } from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Matrix, Navigation, About, Portfolio, Contact } from '../index';
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
        <Router>
          <Styled.InitialFadeInBox
            visible={visible}
          >
            <Navigation />
            <Grid>
              <Row>
                <Col>
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/portfolio" component={Portfolio}/>
                  <Route path="/contact" component={Contact}/>
                </Col>
              </Row>
            </Grid>  
          </Styled.InitialFadeInBox>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

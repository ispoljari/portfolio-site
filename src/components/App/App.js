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
        <Styled.Box
          visible={visible}
        >
          <Router>
            <React.Fragment>
              <Navigation />
              <Grid>
                <Row>
                  <Col>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/contact" component={Contact}/>
                  </Col>
                </Row>
              </Grid>  
            </React.Fragment> 
          </Router>
        </Styled.Box>
      </React.Fragment>
    );
  }
}

export default App;

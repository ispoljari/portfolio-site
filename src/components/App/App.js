import React, { Component } from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Navigation, About, Portfolio } from '../index';
import { hideLoader, externalFontsLoadingComplete } from '../../util';
import * as Styled from './App.style';

class App extends Component {
  state = {
    visible: false,
    prevScrollY: 0,
    offset: false,
  };

  execAfterFontLoadEval = () => {
    hideLoader();
    this.setState({
      visible: true
    });
  };

  handleScroll = () => {
    const { prevScrollY } = this.state; 
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY) {
      this.setState({ 
        offset: true 
      });
    } else {
      this.setState({ 
        offset: false 
      });
    }

    this.setState({ 
      prevScrollY: currentScrollY 
    });
  }

  // componentWillMount = () => {
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  componentDidMount() {
    if (externalFontsLoadingComplete()) {
      this.execAfterFontLoadEval();
    }
  };

  // componentWillUnmount = () => {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  render() {
    const { visible, offset } = this.state;

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
                  <Navigation offset={offset}/>
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

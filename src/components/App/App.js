import React, { Component } from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../global.style';
import * as Styled from './App.style';
import { Pages, Navigation, ScrollToTop } from '../index';
import { hideLoader, FONT_LATO, FONT_PLAYFAIR } from '../../util';
import theme from '../../themes';

class App extends Component {
  state = {
    visible: false,
    theme: theme.dark,
  };

  changeTheme = ({ pathname: page }) => {
    if (this.state.theme !== theme.dark && page === '/') {
      this.setState({
        theme: theme.dark,
      });
    } else if (this.state.theme !== theme.light && (page === '/about' || page === '/portfolio')) {
      this.setState({
        theme: theme.light,
      });
    }
  }

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
    const { visible, theme } = this.state;

    return (
      <ThemeProvider 
        theme={theme}
      >
        <React.Fragment>
          <GlobalStyle />
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
                    <ScrollToTop>
                      <Navigation />
                      <Pages 
                        changeTheme={this.changeTheme}
                      />
                    </ScrollToTop>
                  </Router>
                </Col>
              </Row>
            </Grid>  
          </Styled.InitialFadeInBox>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../global.style';
import * as Styled from './App.style';
import { Pages, Navigation } from '../index';
import { hideLoader, FONT_LATO, FONT_PLAYFAIR } from '../../util';
import lightLogo from '../../svg/logo.svg';
import darkLogo from '../../svg/logoD.svg';


const theme = {
  dark: {
    backgroundColor: '#191919',
    portfolioBoxBackground: 'white',
    portfolioBoxColor: 'black',    
    color: 'rgba(250, 250, 250, 0.6)'
  },
  light: {
    backgroundColor: 'white',
    portfolioBoxBackground: 'black',
    portfolioBoxColor: '#ececec',    
    color: '#2d2d2d'
  }
}

class App extends Component {
  state = {
    visible: false,
    theme: theme.dark,
    logo: lightLogo
  };

  changeTheme = page => {
    if (this.state.theme !== theme.dark && (page === 'home' || page === 'about')) {
      this.setState({
        theme: theme.dark,
        logo: lightLogo
      });
    } else if (this.state.theme !== theme.light && page === 'portfolio') {
      this.setState({
        theme: theme.light,
        logo: darkLogo
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
    const { visible, theme, logo } = this.state;

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
                    <React.Fragment>
                      <Navigation 
                        changeTheme={page => this.changeTheme(page)}
                        logo={logo}
                      />
                      <Pages />
                    </React.Fragment>
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

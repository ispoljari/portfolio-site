import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch, withRouter } from 'react-router-dom';

import * as Styled from './Pages.style';
import { Home, About, Portfolio } from '../index';

class Pages extends Component {
  componentDidUpdate() {
    this.props.changeTheme(this.props.location);
  }

  render() {
    const { location } = this.props;
    return (
      <Styled.RoutesTransitionWrapper>
        <TransitionGroup
          className="transition-group"
        >
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 50 }}
            classNames="fade"
          >
            <div
              className="route-section"
            >
              <Switch 
                location={location}
              >
                <Route 
                  exact 
                  path="/" 
                  component={Home}
                />
                <Route 
                  exact
                  path="/about" 
                  component={About}
                />
                <Route 
                  exact
                  path="/portfolio" 
                  component={Portfolio}
                />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Styled.RoutesTransitionWrapper>
    )
  }
};

export default withRouter(Pages);
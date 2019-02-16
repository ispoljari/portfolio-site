import React from 'react';
import { Box } from '@smooth-ui/core-sc';
import { Link } from 'react-router-dom'; 
import { withRouter } from 'react-router-dom';

import { Logo } from '../index';
import * as Styled from './Navigation.style';

const Navigation = ({ logo, location }) => (
  <Box
    width="100%"
    position="fixed"
    right={0}
    zIndex={100}
    as="nav"
    role="navigation"
  >
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Styled.LogoLink
        to="/"
        logo={logo === 'light' ? 'white' : 'black'}
      >
        <Logo />
      </Styled.LogoLink>
      <Styled.NavList
        page={location.pathname}
      >
        <li>
          <Link 
            to="/about"
            >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
      </Styled.NavList>
    </Box>
  </Box>
);

export default withRouter(Navigation);
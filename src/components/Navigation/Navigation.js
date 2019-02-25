import React from 'react';
import { Box } from '@smooth-ui/core-sc';
import { Link } from 'react-router-dom'; 
import { withRouter } from 'react-router-dom';

import { Logo } from '../index';
import * as Styled from './Navigation.style';

const Navigation = ({ logo, location }) => (
  <Box
    width="100%"
    maxWidth="450px"
    position="fixed"
    left={0}
    zIndex={100}
    as="nav"
    role="navigation"
  >
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="10px 0 10px 10px"
    >
      <Styled.LogoLink
        to="/"
        logo={logo === 'light' ? 'white' : 'black'}
        aria-label="Link - Open Home page"
      >
        <Logo />
      </Styled.LogoLink>
      <Styled.NavList
        page={location.pathname}
      >
        <li>
          <Link 
            to="/about"
            aria-label="Link - Open the About page"
            >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/portfolio"
            aria-label="Link - Open the Portfolio page"
          >
            Portfolio
          </Link>
        </li>
      </Styled.NavList>
    </Box>
  </Box>
);

export default withRouter(Navigation);
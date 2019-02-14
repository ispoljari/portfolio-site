import React from 'react';
import { Box } from '@smooth-ui/core-sc';
import { Link } from 'react-router-dom'; 

import * as Styled from './Navigation.style';

const Navigation = ({ logo }) => (
  <Box
    width="100%"
    position="fixed"
    right={0}
    zIndex={100}
  >
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Styled.LogoLink
        to="/"
      >
        <img
          src={logo} 
          alt="Black and white logo icon depicting the solar system."
        />
      </Styled.LogoLink>
      <Styled.NavList>
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
            color="black"
          >
            Portfolio
          </Link>
        </li>
      </Styled.NavList>
    </Box>
  </Box>
);

export default Navigation;
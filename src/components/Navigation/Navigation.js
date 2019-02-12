import React from 'react';
import { Box } from '@smooth-ui/core-sc';
import { Link } from 'react-router-dom'; 

import * as Styled from './Navigation.style';
import logo from '../../svg/logo.svg';

const Navigation = ({ changeTheme }) => (
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
      <Link 
        to="/"
        onClick={changeTheme}
      >
        <Styled.Logo
          src={logo} 
          alt="Black and white logo icon depicting the solar system."
        />
      </Link>
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
            onClick={changeTheme}
          >
            Portfolio
          </Link>
        </li>
      </Styled.NavList>
    </Box>
  </Box>
);

export default Navigation;
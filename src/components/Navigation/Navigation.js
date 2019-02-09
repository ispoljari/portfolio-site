import React from 'react';
import { Box } from '@smooth-ui/core-sc';
import { Link } from 'react-router-dom'; 

import * as Styled from './Navigation.styled';

const Navigation = () => (
  <Box
    width="100%"
    maxWidth="350px"
    position="fixed"
    right={0}
  >
    <Styled.NavList>
      <li>
        <Link 
          to="/"
        >
          Home
        </Link>
      </li>
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
);

export default Navigation;
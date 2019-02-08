import React from 'react';
import { Box } from '@smooth-ui/core-sc';
import { Link } from 'react-router-dom'; 

import * as Styled from './Navigation.styled';

const Navigation = () => (
  <Box
    width="100%"
    position="fixed"
  >
    <Styled.NavList>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about">
          About
        </Link>
      </li>
      <li>
        <Link to="/portfolio">
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="/contact">
          Contact
        </Link>
      </li>
    </Styled.NavList>
  </Box>
);

export default Navigation;
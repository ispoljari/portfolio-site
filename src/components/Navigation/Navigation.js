import React from 'react';
import { Box } from '@smooth-ui/core-sc';

import * as Styled from './Navigation.styled';

const Navigation = () => (
  <Box
    width="100%"
    position="fixed"
  >
    <Styled.NavList>
      <li>
        <a href="#1">
          Home
        </a>
      </li>
      <li>
        <a href="#2">
          About
        </a>
      </li>
      <li>
        <a href="#3">
          Portfolio
        </a>
      </li>
      <li>
        <a href="#4">
          Contact
        </a>
      </li>
    </Styled.NavList>
  </Box>
);

export default Navigation;
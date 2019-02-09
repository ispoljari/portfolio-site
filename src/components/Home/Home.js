import React from 'react';

import { Box, Row, Col } from '@smooth-ui/core-sc';
import * as Styled from './Home.styled';

const Home = () => (
  <Row
    mx={0}
    px={15}
  >
    <Col
      px={0}
      maxWidth="1100px"
      width="100%"
      my={0}
      mx="auto"
    >
      <Box>
        <Styled.Heading>
          Hello World. 
          <br/> 
          My name is Ivan Špoljarić,
          <br/>
          and I'm a 
          <br/> 
          <span>Web Developer</span>
          <br/>
          from Zagreb, Croatia.
        </Styled.Heading>
      </Box>
    </Col>
  </Row>
);

export default Home;
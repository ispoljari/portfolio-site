import React from 'react';

import { Box, Row, Col } from '@smooth-ui/core-sc';
import * as Styled from './Home.styled';
import github from '../../svg/github.svg';
import linkedin from '../../svg/linkedin.svg';
import medium from '../../svg/medium.svg';

const Home = () => (
  <React.Fragment>  
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
    <Row
      mx={0}
      mt="5vh"
      px={15}
    >
      <Col
        px={0}
        maxWidth="1100px"
        width="100%"
        my={0}
        mx="auto"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={30}
        >
          <Styled.SocialImg src={linkedin} alt="Linkedin logo"/>
          <Styled.SocialImg src={github} alt="Github logo"/>
          <Styled.SocialImg src={medium} alt="Medium logo"/>
        </Box>
      </Col>
    </Row>
  </React.Fragment>  
);

export default Home;
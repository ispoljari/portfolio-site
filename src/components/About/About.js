import React from 'react';
import { Box, Row, Col } from '@smooth-ui/core-sc';

import * as Styled from './About.style';
import family from '../../img/family.png';

const About = () => (
  <Row
    mx={0}
    px={15}
    pt={{xs:"120px", sm:"130px", lg:"140px", xl:"155px"}}
    pb="20px"
  >
    <Col
      px={0}
      xs={12}
      sm={10}
      osm={1}
      lg={8}
      olg={2}
      my={0}
      mx="auto"
      >
      <Box
        as="main"
        role="main"
      >
        <Styled.Quote>
          My family is my strength.
        </Styled.Quote>
        <img 
          src={family} 
          alt="My wife, son and myself"
          style={
            {
              display: 'block',
              margin: '0 auto',
              marginBottom: '30px',
              width: '80%',
              maxWidth: '750px'
            }
          }
        />
        <Styled.Quote>
          Web development is my passion.
        </Styled.Quote>
        <Styled.Quote>
          Engineering is my profession.
        </Styled.Quote>
      </Box>
    </Col>
  </Row>
);

export default About;
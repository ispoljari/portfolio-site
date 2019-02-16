import React from 'react';
import { Box, Row, Col } from '@smooth-ui/core-sc';

import * as Styled from './About.style';

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
          Web development is my passion.
          <br />
          Engineering is my profession.
        </Styled.Quote>
      </Box>
    </Col>
  </Row>
);

export default About;
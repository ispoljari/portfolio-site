import React from 'react';
import { Box, Row, Col } from '@smooth-ui/core-sc';

// impor

const About = () => (
  <Row
    mx={0}
    px={15}
    pt="19vh"
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
        <h2>About</h2>
      </Box>
    </Col>
  </Row>
);

export default About;
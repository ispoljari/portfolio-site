import React from 'react';
import { Row, Col, Box } from '@smooth-ui/core-sc';

import * as Styled from './Portfolio.style';

const Portfolio = () => (
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
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}
          backgroundColor="#191919"
          p={20}
        >
          <Col
            xs={12}
            md={4}
            display="flex"
            alignItems="center"
            justifyContent={{xs: 'left', md: "center"}}
          >
            <Styled.SectionHeading
              white
            >
              The Run&nbsp;
              <br className="break-large"/>
              Tracker App
            </Styled.SectionHeading>
          </Col>
          <Col
            xs={12}
            md={8}
            >
              <Styled.Paragraph
                white
              >
                App description
              </Styled.Paragraph>
            </Col>
        </Row>
      </Box>
    </Col>
  </Row>
);

export default Portfolio;
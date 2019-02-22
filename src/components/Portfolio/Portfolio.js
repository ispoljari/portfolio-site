import React from 'react';
import { Row, Col, Box } from '@smooth-ui/core-sc';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import * as Styled from './Portfolio.style';
import running from '../../img/run-tracker/running.jpg';

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
        >
          <Col
            xs={12}
            mb={{xs:"30px", sm:"40px", lg:"50px", xl:"0px"}}
            xl={7}
          >
            <img 
              src={running} 
              alt="Run Tracker app screenshot"
              style={{
                width:"100%",
                display: "block",
                margin: "0 auto"
              }}
            />
          </Col>
          <Col
            xs={12}
            xl={5}
            pl={{xl:"30px"}}
          >          
            <Styled.SectionHeading>
              Run Tracker
            </Styled.SectionHeading>
            <Styled.Paragraph>
            This app is intended for anyone who whishes to log their running activity and share them with other users on the platform. I wanted to make the design wacky and retro, so I took the inspiration from glitch.com
            </Styled.Paragraph>
          </Col>
        </Row>
      </Box>
    </Col>
  </Row>
);

export default Portfolio;
import React from 'react';
import { Row, Col, Box } from '@smooth-ui/core-sc';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import * as Styled from './Portfolio.style';
import running from '../../img/run-tracker/running.jpg';
import { Javascript, Html, Css, Node, Mongodb } from '../index';

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
            mb={{xs:"20px", xl:"0px"}}
            xl={6}
            display= "flex"
            alignItems= "flex-end"
          >
            <img 
              src={running} 
              alt="Run Tracker app screenshot"
              style={{
                width:"100%",
                display: "block",
                margin: "0 auto",
                borderRadius: "5px"
              }}
            />
          </Col>
          <Col
            xs={12}
            xl={6}
            pl={{xl:"30px"}}
          >          
            <Styled.SectionHeading>
              Run Tracker
            </Styled.SectionHeading>
            <Styled.UsedTech
              display="flex"
              mt="5px"
            >
              <Javascript />
              <Html />
              <Css />
              <Node />
              <Mongodb />
            </Styled.UsedTech>
            <Styled.Paragraph>
            This app is intended for anyone who whishes to log their running activity and share it with other users on the platform. I wanted the app design to be funny and sort of retro-cartoonish, so I took some inspiration from glitch.com.
            </Styled.Paragraph>
            <Styled.ProjectLinks>
              <a 
                href="#1"
              >
                View Code
              </a>
              <a 
                href="#2"
              >
                View Project
              </a>
            </Styled.ProjectLinks>
          </Col>
        </Row>
      </Box>
    </Col>
  </Row>
);

export default Portfolio;
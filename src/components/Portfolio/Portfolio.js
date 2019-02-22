import React from 'react';
import { Row, Col, Box } from '@smooth-ui/core-sc';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import * as Styled from './Portfolio.style';
import runTrackerPosts from '../../img/run-tracker/posts.png';
import newsDigestResults from '../../img/news-digest/search-results.png';
import { Javascript, Html, Css, Node, Mongodb, Jquery } from '../index';
import { delayLinkOpen } from '../../util/index';

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
            mb={{xs:"15px", xl:"0px"}}
            xl={6}
            display= "flex"
            alignItems= "flex-end"
          >
            <img 
              src={runTrackerPosts} 
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
            The app allows users to log their running activity and share it with others on the platform. The design is retro-cartoonish, inspired by glitch.com.
            </Styled.Paragraph>
            <Styled.ProjectLinks>
              <a 
                href="https://github.com/ispoljari/run-tracker-app"
                onClick={delayLinkOpen}
              >
                View Code
              </a>
              <a 
                href="https://pure-peak-20096.herokuapp.com/"
                onClick={delayLinkOpen}
              >
                View Project
              </a>
            </Styled.ProjectLinks>
          </Col>
        </Row>
        <Styled.Hr />
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}
        >
          <Col
            xs={12}
            mb={{xs:"15px", xl:"0px"}}
            xl={6}
            display= "flex"
            alignItems= "flex-end"
          >
            <img 
              src={newsDigestResults} 
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
              News Digest
            </Styled.SectionHeading>
            <Styled.UsedTech
              display="flex"
              mt="5px"
            >
              <Javascript />
              <Jquery />
              <Html />
              <Css />
            </Styled.UsedTech>
            <Styled.Paragraph>
            With this app the user can search through millions of articles from various news sources and blogs, and filter them by selecting different categories.
            </Styled.Paragraph>
            <Styled.ProjectLinks>
              <a 
                href="https://github.com/ispoljari/news-digest-app"
                onClick={delayLinkOpen}
              >
                View Code
              </a>
              <a 
                href="https://ispoljari.github.io/news-digest-app/"
                onClick={delayLinkOpen}
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
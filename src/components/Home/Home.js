import React from 'react';
import { Box, Row, Col } from '@smooth-ui/core-sc';
import TextLoop from 'react-text-loop';

import * as Styled from './Home.style';
import { Linkedin, Github, Medium, Gmail } from '../index';

const Home = () => (
  <React.Fragment>  
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
          as="header"
          role="banner"
        >
          <Styled.Heading>
            Hello World.&nbsp;
            <br className="break-large"/>
            My name is
            Ivan Špoljarić.&nbsp;
            <br className="break-large"/>
            I'm&nbsp;
            <br className="break-under-xs"/>
            <TextLoop
              interval={2500}
              springConfig={{ stiffness: 30, damping: 10 }}
              mask
            >
              <span>
                a Web Developer
              </span>
              <span>
                an Elec. Engineer
              </span>
              <span>
                a Spotify Addict
              </span>
              <span>
                a Coffee Lover
              </span>
              <span>
                a Netflix Binger
              </span>
              <span>
                a SciFi Fan
              </span>
              <span>
                a Tech Geek
              </span>
              <span>
                a Nintendo Owner
              </span>
              <span>
                a Kona Rider
              </span>
              <span>
                a Book Worm
              </span>
            </TextLoop>&nbsp;
            <br className="break-small"/>
            from&nbsp;
            <span>
              <a
                href="https://www.google.com/maps/place/Zagreb/@45.8401104,15.8242483,11z/data=!3m1!4b1!4m5!3m4!1s0x4765d692c902cc39:0x3a45249628fbc28a!8m2!3d45.8150108!4d15.9819189"
                target="_blank"
                rel="noopener noreferrer"
                className="city-link"
                aria-label="Location of Zagreb google maps"
              >
                <span
                  tabIndex="-1"
                  className="city-link_content"
                >
                  Zagreb.
                </span>
              </a>
            </span>
          </Styled.Heading>
        </Box>
      </Col>
    </Row>
    <Row
      mx={0}
      mt={{xs: "20px", md: "35px", lg:"45px"}}
      px={15}
    >
      <Col
        px={0}
        maxWidth="1100px"
        width="100%"
        my={0}
        mx="auto"
      >
        <Styled.SocialParagraph>
          Connect with me
        </Styled.SocialParagraph>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          mb={15}
          as="section"
          role="region"
        >
          <Styled.SocialLink 
            href="https://www.linkedin.com/in/ivan-špoljarić-2206a184
            "
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin page"
          >
            <span
              className="social-link_content"
              tabIndex="-1"
            >
              <Linkedin />
            </span>
          </Styled.SocialLink >
          <Styled.SocialLink  
            href="https://github.com/ispoljari"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github page"
          >
            <span
              className="social-link_content"
              tabIndex="-1"
            >
              <Github />
            </span>
          </Styled.SocialLink >
          <Styled.SocialLink  
            href="https://medium.com/@ivanspoljaric22"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium page"
          >
            <span
              className="social-link_content"
              tabIndex="-1"
            >
              <Medium />
            </span>
          </Styled.SocialLink >
          <Styled.SocialLink  
            href="mailto:ivan@ispoljaric.com?subject=Business proposal"
            aria-label="Send email to ivan@ispoljaric.com"
          >
            <span
              className="social-link_content"
              tabIndex="-1"
            >
              <Gmail />
            </span>
          </Styled.SocialLink >
        </Box>
      </Col>
    </Row>
  </React.Fragment>  
);

export default Home;
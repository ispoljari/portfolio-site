import React from 'react';
import { Box, Row, Col } from '@smooth-ui/core-sc';
import TextLoop from 'react-text-loop';

import * as Styled from './Home.style';
import { Linkedin, Github, Medium, Gmail } from '../index';

const Home = () => {

  // add a small delay to link opening so that the :active scale(1.2) text transformation becomes visible
  const delayLinkOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const href = e.target.href;
    const email = href.includes('mailto') ? true : false;

    setTimeout(function() {
      if (!email) {
        window.open(href, '_blank');
      } else {
        window.location.href = href;
      }
    }, 300);
  }

  return (
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
              <br className="break-small"/>
              <TextLoop
                interval={3500}
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
                  a Proud Father
                </span>
                <span>
                  a Jedi Knight
                </span>
                <span>
                  a Nintendo Owner
                </span>
                <span>
                  a Kona Biker
                </span>
                <span>
                  a Book Worm
                </span>
                <span>
                  a PC Gamer
                </span>
                <span>
                  a Legend
                </span>
              </TextLoop>
              <br/>
              from&nbsp;
              <span>
                <a
                  href="https://www.google.com/maps/place/Zagreb/@45.8401104,15.8242483,11z/data=!3m1!4b1!4m5!3m4!1s0x4765d692c902cc39:0x3a45249628fbc28a!8m2!3d45.8150108!4d15.9819189"
                  onClick={delayLinkOpen}
                >
                  Zagreb
                </a>
              </span>.
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
              onClick={delayLinkOpen}
            >
              <Linkedin />
            </Styled.SocialLink >
            <Styled.SocialLink  
              href="https://github.com/ispoljari"
              onClick={delayLinkOpen}
            >
              <Github />
            </Styled.SocialLink >
            <Styled.SocialLink  
              href="https://medium.com/@ivanspoljaric22"
              onClick={delayLinkOpen}
            >
              <Medium />
            </Styled.SocialLink >
            <Styled.SocialLink  
              href="mailto:ivanspoljaric22@gmail.com?subject=Business proposal"
              onClick={delayLinkOpen}
            >
              <Gmail />
            </Styled.SocialLink >
          </Box>
        </Col>
      </Row>
    </React.Fragment>  
  )
};

export default Home;
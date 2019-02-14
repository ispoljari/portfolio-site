import React from 'react';

import { Box, Row, Col } from '@smooth-ui/core-sc';
import * as Styled from './Home.style';
import github from '../../svg/github.svg';
import linkedin from '../../svg/linkedin.svg';
import medium from '../../svg/medium.svg';
import gmail from '../../svg/gmail.svg';

const Home = () => {

  // add a small delay to link opening so that the :active scale(1.3) text transformation becomes visible
  const delayLinkOpen = (e) => {
    e.preventDefault();
    const href = e.target.parentElement.href;
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
        as="header"
        role="banner"
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
        mt={{xs: "4vh", lg: "7vh"}}
        px={15}
        as="section"
        role="region"
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
          >
            <Styled.SocialLink 
              href="https://www.linkedin.com/in/ivan-špoljarić-2206a184
              "
              onClick={delayLinkOpen}
            >
              <img 
                src={linkedin} 
                alt="Linkedin logo"
              />
            </Styled.SocialLink >
            <Styled.SocialLink  
              href="https://github.com/ispoljari"
              onClick={delayLinkOpen}
            >
              <img
                src={github} 
                alt="Github logo"
              />
            </Styled.SocialLink >
            <Styled.SocialLink  
              href="https://medium.com/@ivanspoljaric22"
              onClick={delayLinkOpen}
            >
              <img
                src={medium} 
                alt="Medium logo"
              />
            </Styled.SocialLink >
            <Styled.SocialLink  
              href="mailto:ivanspoljaric22@gmail.com?subject=Business proposal"
              onClick={delayLinkOpen}
            >
              <img
                src={gmail} 
                alt="Gmail logo"
              />
            </Styled.SocialLink >
          </Box>
        </Col>
      </Row>
    </React.Fragment>  
  )
};

export default Home;
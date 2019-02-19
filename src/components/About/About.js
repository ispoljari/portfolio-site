import React from 'react';
import { Box, Row, Col } from '@smooth-ui/core-sc';
import { Link } from 'react-router-dom'; 

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
        <Row
          mb={{xs:"20px", sm:"30px", lg:"40px", xl:"50px"}}
        >
          <Col 
          >
            <Styled.SectionHeading>
              Pozdrav
            </Styled.SectionHeading>  
            <Styled.Paragraph>
              'Pozdrav' means 'Hello' in Croatian. <span role="img" aria-label="hand wave emoji">👋</span> My name is Ivan, and I'm 29 years old. I invite you to browse through this section to find out more about me, my interests, professional experience and technical skills. Thanks for visiting and have a nice day. 
            </Styled.Paragraph>
          </Col>
        </Row>
        <Row
        mb={{xs:"20px", sm:"30px", lg:"40px", xl:"50px"}}
        borderRadius={5}
        backgroundColor="#191919"
        p={20}
        >
          <Col
          xs={12}
          md={6}
          xl={5}
          display="flex"
          alignItems="center"
          justifyContent={{xs: 'left', md: "center"}}
          >
            <Styled.SectionHeading
              white
            >
              Coding from an early childhood
            </Styled.SectionHeading>
          </Col>
          <Col
          xs={12}
          md={6}
          xl={7}
          >
            <Styled.Paragraph
              white
            >
              Ever since I was a little kid, I always preffered the science subjects in school. During those formative years, except spending my time just being a kid, I enjoyed learning mathematics, physics and coming up with all sorts of conceptual problems that sharpened my critical thinking skills.
              <br/>
              <br/> 
              I also loved the programming classes. They introduced me to the world of coding. I made my first, small app in 5th grade of primary school. It was written in QBasic and based on the popular TV Show "Who wants to be a Millionare".
            </Styled.Paragraph>
          </Col>
        </Row>
        <Row
        mb={{xs:"20px", sm:"30px", lg:"40px", xl:"50px"}}        
        borderRadius={5}
        >
          <Col
          xs={12}
          md={6}
          xl={5}
          display="flex"
          alignItems="center"
          justifyContent={{xs: 'left', md: "center"}}
          >
            <Styled.SectionHeading>
              Engineering became a profession
            </Styled.SectionHeading>
          </Col>
          <Col
          xs={12}
          md={6}
          xl={7}
          >
            <Styled.Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Styled.Paragraph>
          </Col>
        </Row>
        <Row
          mb={{xs:"20px", sm:"30px", lg:"40px", xl:"50px"}}          
          borderRadius={5}
          backgroundColor="#191919"
          p={20}
        >
          <Col
            xs={12}
            md={6}
            xl={5}
            display="flex"
            alignItems="center"
            justifyContent={{xs: 'left', md: "center"}}
          >
            <Styled.SectionHeading
              white
            >
              Web Development became a passion
            </Styled.SectionHeading>  
          </Col>
          <Col
            xs={12}
            md={6}
            xl={7}
          >
            <Styled.Paragraph
              white
            >
              I've come along way since dabbling with QBasic in primary school. I've written programs in low-level languages such as C (mostly for embedded systems), as well as in high-level languages such as Javascript or Python. The most important mindset shift has 
            </Styled.Paragraph>
          </Col>
        </Row>
        <Row
          mb={{xs:"20px", sm:"30px", lg:"40px", xl:"50px"}}          
          borderRadius={5}
        >
          <Col
            xs={12}
            md={6}
            xl={5}
            display="flex"
            alignItems="center"
            justifyContent={{xs: 'left', md: "center"}}
          >
            <Styled.SectionHeading>
            A source of strength
            </Styled.SectionHeading>  
          </Col>
          <Col
            xs={12}
            md={6}
            xl={7}
            mt={{xs:"20px", md:"0"}}
          >
            <img 
              src={family} 
              alt="My wife, son and myself"
              style={
                {
                  display: 'block',
                  width: '100%',
                  maxWidth: '400px',
                  margin: '0 auto'
                }
              }
            />     
          </Col>
        </Row>
        <Row
          mb={10}
        >
          <Col 
          >
            <Styled.Paragraph>
              I'm currently looking for dev. work, so feel free to contact me at&nbsp;
              <a 
                href="mailto:ivanspoljaric22@gmail.com?subject=Business proposal"
                target="_blank"
                rel="noopener noreferrer"
              >
                ivanspoljaric22@gmail.com
              </a>.
            </Styled.Paragraph>
          </Col>
        </Row>
      </Box>
    </Col>
  </Row>
);

export default About;
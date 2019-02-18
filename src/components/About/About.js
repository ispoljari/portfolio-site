import React from 'react';
import { Box, Row, Col } from '@smooth-ui/core-sc';

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
        mb={50}
      >
        <Col 
        >
          <h2>
            Pozdrav
          </h2>  
          <Styled.Paragraph>
            'Pozdrav' means 'Hello' in Croatian. My name is Ivan, and I'm 29 years old. 
            I invite you to browse through my bio to find out more about me, my interests and skills. You can  check out some of my projects in the portfolio section. I developed a few pretty cool apps which I think you'll like. Also, take a look at my Medium account where I publish web-dev related articles.
            I'm currently looking for work, so feel free to contact me any time. Thanks for visiting my website and have a nice day.
          </Styled.Paragraph>
        </Col>
      </Row>
      <Row
       mb={50}
       backgroundColor="black"
       borderRadius={5}
       p={20}
      >
        <Col
         xs={12}
         md={6}
         display="flex"
         alignItems="center"
         justifyContent={{xs: 'left', md: "center"}}
        >
          <Styled.SectionHeading>
            Web development is my passion
          </Styled.SectionHeading>
        </Col>
        <Col
         xs={12}
         md={6}
        >
          <Styled.Paragraph
            white
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Styled.Paragraph>
        </Col>
      </Row>
      <Row
        mb={50}
        borderRadius={5}
      >
        <Col
          xs={12}
          md={6}
          display="flex"
          alignItems="center"
          justifyContent={{xs: 'left', md: "center"}}
        >
          <h2>
            Engineering is my profession
          </h2>  
        </Col>
        <Col
          xs={12}
          md={6}
        >
        <Styled.Paragraph
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Styled.Paragraph>
        </Col>
        <Col>
        </Col>
      </Row>
      <Row
        mb={50}
        borderRadius={5}
        p={20}
       backgroundColor="black"
      >
        <Col
          xs={12}
          md={6}
          display="flex"
          alignItems="center"
          justifyContent={{xs: 'left', md: "center"}}
        >
          <Styled.SectionHeading>
           Family is my strength
          </Styled.SectionHeading>  
        </Col>
        <Col
          xs={12}
          md={6}
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
        mb={20}
      >
        <Col>
          <h2>
            Mindfullness is my way of life
          </h2>  
          <Styled.Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Styled.Paragraph>
        </Col>
      </Row>
      </Box>
    </Col>
  </Row>
);

export default About;
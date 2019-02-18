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
        mb={20}
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
            Pozdrav
          </Styled.SectionHeading>  
        </Col>
        <Col
          xs={12}
          md={6}
        >
          <Styled.Paragraph>
          'Pozdrav' means 'Hello' in Croatian. My name is Ivan, and I'm 29 years old. I invite you to browse through my bio or some of my projects in the portfolio section. I developed a few pretty cool apps which I think you'll like.
          I'm currently looking for work, so feel free to contact me any time. Thanks for visiting my website. :)
          </Styled.Paragraph>
        </Col>
      </Row>
      <Row
       mb={20}
      >
        <Col>
          <h2>
            Web development is my passion
          </h2>
          <Styled.Paragraph>
            I like to code things from scratch
          </Styled.Paragraph>
        </Col>
      </Row>
      <Row
        mb={20}
      >
        <Col>
          <h2>
            Engineering is my profession
          </h2>  
        </Col>
      </Row>
      <Row
        mb={20}
      >
        <Col>
          <h2>
           My family is my strength
          </h2>
          <img 
            src={family} 
            alt="My wife, son and myself"
            style={
              {
                display: 'block',
                margin: '20px auto 0 auto',
                marginBottom: '30px',
                width: '80%',
                maxWidth: '750px'
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
        </Col>
      </Row>
      </Box>
    </Col>
  </Row>
);

export default About;
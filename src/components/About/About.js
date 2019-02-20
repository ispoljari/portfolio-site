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
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}
        >
          <Col 
          >
            <Styled.SectionHeading>
              Pozdrav&nbsp;
              <span 
                role="img" 
                aria-label="hand wave emoji"
              >
                  👋
              </span>
            </Styled.SectionHeading>  
            <Styled.Paragraph>
              'Pozdrav' means 'Hello' in Croatian. Thanks for visiting my website. My name is Ivan, and I'm 29 years old. If you are interested in finding out more about me, my interests, projects or skills, please browse around.
              <br/> 
              <br/> 

              I've built this site using react, react-router and styled components.&nbsp;
              <a 
                href="https://github.com/ispoljari/portfolio-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                Checkout the code
              </a>.
            </Styled.Paragraph>
          </Col>
        </Row>
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
              Curious&nbsp;
              <br className="break-large"/>
              Mind&nbsp;
              <span 
                role="img" 
                aria-label="curious face emoji"
              >
                  🤔
              </span>
            </Styled.SectionHeading>
          </Col>
          <Col
          xs={12}
          md={8}
          >
            <Styled.Paragraph
              white
            >
              I started to code very early in my life. I developed my first app in 5th grade of primary school. It was written in QBasic and based on the popular TV Show "Who wants to be a Millionare".
              <br/>
              <br/> 
              Ever since I was a little kid, I was very curious about the world. During my education I enjoyed learning mathematics, physics and programming. Besides my school interests, I loved learning about Dinosaurs and Astronomy.
            </Styled.Paragraph>
          </Col>
        </Row>
        <Row
        mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}    
        >
          <Col
          xs={12}
          md={4}
          display="flex"
          alignItems="center"
          justifyContent={{xs: 'left', md: "center"}}
          >
            <Styled.SectionHeading>
              Web&nbsp;
              <br className="break-large"/>
              Developer&nbsp;
              <span 
                role="img" 
                aria-label="curious face emoji"
              >
                👨‍💻
              </span>
            </Styled.SectionHeading>
          </Col>
          <Col
          xs={12}
          md={8}
          >
            <Styled.Paragraph>
              I became passionate about Web development after I graduated college. I started spending a lot of my time online, on websites like TechCrunch and HackerNews. Seeing all those cool apps,  inovative startups, bold enterpreneurs and brilliant developers changing our technological landscape on a daily basis, something awoke in me. A strong  desire to join them and to be a part of the disruption.
              <br/>
              <br/> 
              That's when I decided to start learning all I can about Web development. And I've come a long way in the last 2 years. I've learned how to develop modern web apps using the MERN stack. I know my way around the server-side as well as the client-side. 
              <br/>
              <br/> 
              There's a lot of other cool stuff related to web development that I know like NodeJS, ExpressJS, MongoDB, jQuery, React, Redux, Bootstrap, Mocha, Chai, Enzyme, HTML, CSS, CSS-in-JS, TDD, responsive design, progressive enhancement, graceful degradation, a11y, mobile-first design, continuous integration, code transpiling, module bundling, RESTful architecture, API's and more.  
            </Styled.Paragraph>
          </Col>
        </Row>
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
              Elec.&nbsp; 
              <br className="break-large"/>
              Engineer&nbsp;
              <span 
                role="img" 
                aria-label="curious face emoji"
              >
                ⚡
              </span>
            </Styled.SectionHeading>  
          </Col>
          <Col
            xs={12}
            md={8}
          >
            <Styled.Paragraph
              white
            >
              I obtained a Masters Degree in electrical engineering, with a focus towards automation and electrical machine design. 
              <br/>
              <br/> 
              It is a very challenging and interesting technical field in which I had the opportunity to work for a couple of years. I designed power transformers and complex automation systems. I've programmed PLC's and commissioned large industrial facilities such as sawmills and tobaco warehouses. 
            </Styled.Paragraph>
          </Col>
        </Row>
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}  
        >
          <Col
            xs={12}
            md={4}
            display="flex"
            alignItems="center"
            justifyContent={{xs: 'left', md: "center"}}
          >
            <Styled.SectionHeading>
              Father,&nbsp; 
              <br className="break-large"/>
              Husband 👪
            </Styled.SectionHeading>  
          </Col>
          <Col
            xs={12}
            md={8}
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
              Favorite&nbsp;
              <br className="break-large"/>
              Quote&nbsp;
              <span 
                role="img" 
                aria-label="planet earth emoji"
              >
                🌍
              </span>
            </Styled.SectionHeading>
          </Col>
          <Col
          xs={12}
          md={8}
          >
            <Styled.Paragraph
              white
            >
              The most inspiring words I ever heard come from the mind of Carl Sagan, a beautiful human being who also wrote one of my favorite books called "Contact". His reflections are inspired by a photograph of our planet made by the Voyager 1 space probe as it was leaving our solar system. Today the photograph is famously known as the "Pale Blue Dot". 
              <br />
              <br />              
              The text is to long to copy here, so here's&nbsp;
              <a 
                href="https://www.youtube.com/watch?v=GO5FwsblpT8"
                target="_blank"
                rel="noopener noreferrer"
              >
                a video
              </a>&nbsp;
              of him reading those words, as seen in the last scene of the 2014's "Cosmos: A SpaceTime Odyssey" documentary. Every time I watch it I get goosebumps. It inspires in me both humility and hope for a better tommorow.
            </Styled.Paragraph>
          </Col>
        </Row>
        <Row
          mb={{xs:"20px", sm:"30px", lg:"40px", xl:"50px"}}
        >
          <Col 
            xs={12}
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
import React from 'react';
import { Box, Row, Col } from '@smooth-ui/core-sc';
import {BarChart} from 'react-easy-chart';

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
              'Pozdrav' means 'Hello' in Croatian. My name is Ivan, and I'm 29 years old. I invite you to browse through this section to find out more about me, my interests, professional experience and technical skills. Thanks for visiting and have a nice day. 
            </Styled.Paragraph>
          </Col>
        </Row>
        <Row
        mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}
        borderRadius={5}
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
              Ever since I was a little kid, I always preffered the science subjects in school. During those formative years, except spending my time just being a kid, I enjoyed learning mathematics, physics and coming up with all sorts of conceptual problems that sharpened my critical thinking skills.
              <br/>
              <br/> 
              I also loved the programming classes. They introduced me to the world of coding. I made my first, small app in 5th grade of primary school. It was written in QBasic and based on the popular TV Show "Who wants to be a Millionare".
            </Styled.Paragraph>
          </Col>
        </Row>
        <Row
        mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}        
        borderRadius={5}
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
              I've come along way from my QBasic school days. I've learned how to writte programs in low-level languages such as C (mostly for embedded systems), as well as in high-level languages such as Javascript or Python. I know how to develop modern, dynamic, responsive, progressive, a11y, fast web apps using the MERN stack. Here are some my skills:
              {/* <BarChart
                data={}
              /> */}
            </Styled.Paragraph>
          </Col>
        </Row>
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}          
          borderRadius={5}
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
              I knew I wanted to pursue an engineering degree while I was stil in elementary school. I have a practicaly oriented mindset and an affinity towards problem solving, so it always seemed like a natural choice.
              <br/>
              <br/> 
              I obtained a masters degree in electrical engineering, with a focus towards automation and electrical machine design. It is a very challenging and interesting technical field in which I had the opportunity to work for a couple of years. 
              <br/>
              <br/> 
              I designed power transformers and complex automation systems. I've programmed PLC's and commissioned large industrial facilities such as sawmills and tobaco warehouses. 

            </Styled.Paragraph>
          </Col>
        </Row>
        <Row
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}          
          borderRadius={5}
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
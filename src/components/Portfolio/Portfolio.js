import React from 'react';
import { Row, Col, Box } from '@smooth-ui/core-sc';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
// import { Carousel } from 'react-responsive-carousel';

import * as Styled from './Portfolio.style';
import runTrackerPosts from '../../img/run-tracker/posts.png';
import newsDigestResults from '../../img/news-digest/search-results.png';
import recipesResults from '../../img/recipe-builder/headline.png';
import quizzOpeningPage from '../../img/soundtrack-quizz/opening-page.png';
import { Javascript, Html, Css, Node, Mongodb, Jquery, ReactIcon, Heroku, GithubPages } from '../index';
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
        <ScrollAnimation
          animateIn="fadeInDown"
          offset={0}
          duration={0.5}
          animateOnce
        >
          <Row
            mb={{xs:"30px", sm:"40px", lg:"50px", xl:"80px"}}
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
              <ScrollAnimation
                animateIn="fadeInDown"
                offset={0}
                duration={0.5}
                delay={500}
                animateOnce
              >
                <Styled.SectionHeading>
                  Run Tracker
                </Styled.SectionHeading>
              </ScrollAnimation>          
              <Styled.UsedTech
                display="flex"
                mt="5px"
              >
                <ScrollAnimation
                  animateIn="fadeInDown"
                  offset={0}
                  duration={0.5}
                  delay={500}
                  animateOnce
                >
                  <Javascript />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInDown"
                  offset={0}
                  duration={0.5}
                  delay={700}
                  animateOnce
                >
                  <Html />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInDown"
                  offset={0}
                  duration={0.5}
                  delay={900}
                  animateOnce
                >
                  <Css />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInDown"
                  offset={0}
                  duration={0.5}
                  delay={1100}
                  animateOnce
                >
                  <Node />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInDown"
                  offset={0}
                  duration={0.5}
                  delay={1300}
                  animateOnce
                >
                  <Mongodb />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInDown"
                  offset={0}
                  duration={0.5}
                  delay={1500}
                  animateOnce
                >
                  <Heroku />
                </ScrollAnimation>
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
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          offset={150}
          duration={0.5}
          animateOnce
        >
          <Styled.Hr />
          <Row
            mb={{xs:"30px", sm:"40px", lg:"50px", xl:"80px"}}
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
                alt="News digest app screenshot"
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
               <ScrollAnimation
                animateIn="fadeInLeft"
                offset={150}
                duration={0.5}
                delay={500}
                animateOnce
              >
                <Styled.SectionHeading>
                  News Digest
                </Styled.SectionHeading>
              </ScrollAnimation>     
              <Styled.UsedTech
                display="flex"
                mt="5px"
              >
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  offset={150}
                  duration={0.5}
                  delay={500}
                  animateOnce
                >
                  <Javascript />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  offset={150}
                  duration={0.5}
                  delay={700}
                  animateOnce
                >
                  <Jquery />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  offset={150}
                  duration={0.5}
                  delay={900}
                  animateOnce
                >
                  <Html />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  offset={150}
                  duration={0.5}
                  delay={1100}
                  animateOnce
                >
                  <Css />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  offset={150}
                  duration={0.5}
                  delay={1300}
                  animateOnce
                >
                  <GithubPages/>
                </ScrollAnimation>
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
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          offset={150}
          duration={0.5}
          animateOnce
        >
          <Styled.Hr />
          <Row
            mb={{xs:"30px", sm:"40px", lg:"50px", xl:"80px"}}
          >
            <Col
              xs={12}
              mb={{xs:"15px", xl:"0px"}}
              xl={6}
              display= "flex"
              alignItems= "flex-end"
            >
              <img 
                src={recipesResults} 
                alt="Recipe builder app screenshot"
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
              <ScrollAnimation
                animateIn="fadeInRight"
                offset={150}
                duration={0.5}
                delay={500}
                animateOnce
              >
                <Styled.SectionHeading>
                  Recipe Builder
                </Styled.SectionHeading>
              </ScrollAnimation>  
              <Styled.UsedTech
                display="flex"
                mt="5px"
              >
                <ScrollAnimation
                  animateIn="fadeInRight"
                  offset={150}
                  duration={0.5}
                  delay={700}
                  animateOnce
                >
                  <Javascript />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInRight"
                  offset={150}
                  duration={0.5}
                  delay={900}
                  animateOnce
                >
                  <ReactIcon />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInRight"
                  offset={150}
                  duration={0.5}
                  delay={1100}
                  animateOnce
                >
                  <Html />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInRight"
                  offset={150}
                  duration={0.5}
                  delay={1300}
                  animateOnce
                >
                  <Css />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInRight"
                  offset={0}
                  duration={0.5}
                  delay={1500}
                  animateOnce
                >
                    <Heroku />
                </ScrollAnimation>
              </Styled.UsedTech>
              <Styled.Paragraph>
              This app is intended for anyone that needs cooking inspiration. The user can take a picture of the ingredients and the app returns a list of related recipes.
              </Styled.Paragraph>
              <Styled.ProjectLinks>
                <a 
                  href="https://github.com/ispoljari/react-recipe-builder-app"
                  onClick={delayLinkOpen}
                >
                  View Code
                </a>
                <a 
                  href="https://limitless-cove-25974.herokuapp.com/"
                  onClick={delayLinkOpen}
                >
                  View Project
                </a>
              </Styled.ProjectLinks>
            </Col>
          </Row>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          offset={150}
          duration={0.5}
          animateOnce
        >
          <Styled.Hr />
          <Row
            mb={{xs:"30px", sm:"40px", lg:"50px", xl:"80px"}}
          >
            <Col
              xs={12}
              mb={{xs:"15px", xl:"0px"}}
              xl={6}
              display= "flex"
              alignItems= "flex-end"
            >
              <img 
                src={quizzOpeningPage} 
                alt="Soundtrack quizz app opening page screenshot"
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
              <ScrollAnimation
                animateIn="fadeInLeft"
                offset={150}
                duration={0.5}
                delay={500}
                animateOnce
              >
                <Styled.SectionHeading>
                  Soundtracks Quizz
                </Styled.SectionHeading>
              </ScrollAnimation>  
              <Styled.UsedTech
                display="flex"
                mt="5px"
              >
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  offset={150}
                  duration={0.5}
                  delay={700}
                  animateOnce
                >
                  <Javascript />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  offset={150}
                  duration={0.5}
                  delay={900}
                  animateOnce
                >
                  <Jquery />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  offset={150}
                  duration={0.5}
                  delay={1100}
                  animateOnce
                >
                  <Html />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  offset={150}
                  duration={0.5}
                  delay={1300}
                  animateOnce
                >
                  <Css />
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  offset={150}
                  duration={0.5}
                  delay={1500}
                  animateOnce
                >
                  <GithubPages/>
                </ScrollAnimation>
              </Styled.UsedTech>
              <Styled.Paragraph>
                A quiz consisting of 10 questions. The topic is soundtrack music from movies, tv-shows and games.
              </Styled.Paragraph>
              <Styled.ProjectLinks>
                <a 
                  href="https://github.com/ispoljari/quiz-app"
                  onClick={delayLinkOpen}
                >
                  View Code
                </a>
                <a 
                  href="https://ispoljari.github.io/quiz-app/"
                  onClick={delayLinkOpen}
                >
                  View Project
                </a>
              </Styled.ProjectLinks>
            </Col>
          </Row>
        </ScrollAnimation>
      </Box>
    </Col>
  </Row>
);

export default Portfolio;
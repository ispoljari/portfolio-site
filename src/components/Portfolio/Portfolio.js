import React from 'react';
import { Row, Col, Box } from '@smooth-ui/core-sc';

import * as Styled from './Portfolio.style';
import runTrackerPosts from '../../img/run-tracker/posts.png';
import newsDigestResults from '../../img/news-digest/search-results.png';
import recipesResults from '../../img/recipe-builder/headline.png';
import quizzOpeningPage from '../../img/soundtrack-quizz/opening-page.png';
import { Javascript, Html, Css, Node, Mongodb, Jquery, ReactIcon, Heroku, GithubPages } from '../index';

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
              alt="Run Tracker app screenshot showing an example post box"
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
              <Heroku />
            </Styled.UsedTech>
            <Styled.Paragraph>
            The app allows users to log their running activity and share it with others on the platform. The design is retro-cartoonish, inspired by glitch.com.
            </Styled.Paragraph>
            <Styled.ProjectLinks>
              <a 
                href="https://github.com/ispoljari/run-tracker-app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Run tracker code"
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  View Code
                </span>
              </a>
              <a 
                href="https://pure-peak-20096.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Run tracker live app"
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  View Project
                </span>
              </a>
            </Styled.ProjectLinks>
          </Col>
        </Row>
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
              alt="News digest app screenshot showing the results of a search"
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
              <GithubPages/>
            </Styled.UsedTech>
            <Styled.Paragraph>
            With this app the user can search through millions of articles from various news sources and blogs, and filter them by selecting different categories.
            </Styled.Paragraph>
            <Styled.ProjectLinks>
              <a 
                href="https://github.com/ispoljari/news-digest-app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="News digest code"
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  View Code
                </span>
              </a>
              <a 
                href="https://ispoljari.github.io/news-digest-app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="News digest live app"
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  View Project
                </span>
              </a>
            </Styled.ProjectLinks>
          </Col>
        </Row>
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
              alt="Recipe builder app screenshot the front page with the title"
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
              Recipe Builder
            </Styled.SectionHeading>
            <Styled.UsedTech
              display="flex"
              mt="5px"
            >
              <Javascript />
              <ReactIcon />
              <Html />
              <Css />
              <Heroku />
            </Styled.UsedTech>
            <Styled.Paragraph>
            This app is intended for anyone that needs cooking inspiration. The user can take a picture of the ingredients and the app returns a list of related recipes.
            </Styled.Paragraph>
            <Styled.ProjectLinks>
              <a 
                href="https://github.com/ispoljari/react-recipe-builder-app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Recipe builder code"
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  View Code
                </span>
              </a>
              <a 
                href="https://limitless-cove-25974.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Recipe builder live app"
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  View Project
                </span>
              </a>
            </Styled.ProjectLinks>
          </Col>
        </Row>
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
            <Styled.SectionHeading>
              Soundtracks Quizz
            </Styled.SectionHeading>
            <Styled.UsedTech
              display="flex"
              mt="5px"
            >
              <Javascript />
              <Jquery />
              <Html />
              <Css />
              <GithubPages/>
            </Styled.UsedTech>
            <Styled.Paragraph>
              A quiz consisting of 10 questions. The topic is soundtrack music from movies, tv-shows and games.
            </Styled.Paragraph>
            <Styled.ProjectLinks>
              <a 
                href="https://github.com/ispoljari/quiz-app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Soundtracks quizz code"
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  View Code
                </span>
              </a>
              <a 
                href="https://ispoljari.github.io/quiz-app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Soundtracks quizz live app"
              >
                <span
                  className="project-link_content"
                  tabIndex="-1"
                >
                  View Project
                </span>
              </a>
            </Styled.ProjectLinks>
          </Col>
        </Row>
        <Row
          mb={{xs:"20px", sm:"30px", lg:"40px", xl:"50px"}}
        >
          <Col 
            xs={12}
          >
            <Styled.Paragraph>
              <b>I'm currently looking for dev. work!</b> 
              <br />
              Feel free to contact me at&nbsp;
              <a 
                href="mailto:ivan@ispoljaric.com?subject=Business proposal"
                aria-label="Send email to ivan@ispoljaric.com"
              >
                <span
                  className="email-link_content"
                  tabIndex="-1"
                >
                  ivan@ispoljaric.com
                </span>
              </a>.
            </Styled.Paragraph>        
          </Col>
        </Row>
      </Box>
    </Col>
  </Row>
);

export default Portfolio;
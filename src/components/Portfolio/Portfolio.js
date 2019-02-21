import React from 'react';
import { Row, Col, Box } from '@smooth-ui/core-sc';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import * as Styled from './Portfolio.style';
import addRun from '../../img/run-tracker/add-run.png';
import chooseAvatar from '../../img/run-tracker/choose-avatar.png';
import editRun from '../../img/run-tracker/edit-run.png';
import mainFeed from '../../img/run-tracker/main-feed.png';

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
          mb={{xs:"30px", sm:"40px", lg:"50px", xl:"60px"}}
        >
          <Col
            // xs={12}
            // md={4}
            // display="flex"
            // alignItems="center"
            // justifyContent={{xs: 'left', md: "center"}}
          >
            <Styled.SectionHeading>
              Run Tracker
            </Styled.SectionHeading>
            <Styled.Paragraph>
              App description
            </Styled.Paragraph>
          </Col>
          <Col
            xs={12}
            md={8}
          >
            <Carousel
              showArrows
              showIndicators
              swipeable
              showThumbs={false}
            >
              <div>
                <img src={mainFeed} />
              </div>
              <div>
                <img src={addRun} />
              </div>
              <div>
                <img src={chooseAvatar} />
              </div>
              <div>
                <img src={editRun} />
              </div>
            </Carousel>
          </Col>
        </Row>
      </Box>
    </Col>
  </Row>
);

export default Portfolio;
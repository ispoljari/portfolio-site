import styled from 'styled-components';
import { Box } from '@smooth-ui/core-sc';

export const Paragraph = styled.p`
  color: ${props => props.white ? 'rgba(250,250,250,0.7)' : 'rgba(25, 25, 25, 0.8)'};
  font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1700 - 320)));

  @media (min-width: 1700px) {
    font-size: 20px;
  }

  @media (max-width: 320px) {
    font-size: 16px;
  }

  a {
    text-decoration: none;
    user-select: none;  
    -webkit-tap-highlight-color: transparent;
    color: inherit;

    :hover {
      color: ${props => props.email ? '#388e3c' : 'turquoise'};

      /* Block "sticky hover" effect on mobile devices */
      @media (hover: none) {
        color: inherit;
      }
    }

    .email-link_content {
      display: inline-block;
      text-decoration: underline;
    }

    :focus {
      outline: none;

      .email-link_content {
        color: ${props => props.email ? '#388e3c' : 'turquoise'};
        outline: ${props => props.email ? '3px solid #388e3c' : '3px solid turquoise'};
      }
    }

    .email-link_content:focus {
      outline: none;
    }
  }
`;

export const SectionHeading = styled.h2`
  font-size: calc(28px + (46 - 28) * ((100vw - 320px) / (1700 - 320)));

  @media (min-width: 1700px) {
    font-size: 46px;
  }

  @media (max-width: 320px) {
    font-size: 28px;
  }
  
  color: black;
`;

export const UsedTech = styled(Box)`
  svg {
    width: calc(20px + (25 - 20) * ((100vw - 320px) / (1700 - 320)));
    height: calc(20px + (25 - 20) * ((100vw - 320px) / (1700 - 320)));
    margin-right: 10px;

    .heroku-logo {
      fill: #2d2d2d;
    }

    rect {
      fill: transparent;
    }

    @media (min-width: 992px) {
      margin-right: 10px;
    }

    @media (min-width: 1700px) {
      width: 25px;
    }
  
    @media (max-width: 320px) {
      width: 20px;
    }
  }
`;

export const ProjectLinks = styled(Box)`
  a {
    font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1700 - 320)));

    @media (min-width: 1700px) {
      font-size: 20px;
    }

    @media (max-width: 320px) {
      font-size: 16px;
    }

    user-select: none;  
    -webkit-tap-highlight-color: transparent;
    transition: transform 0.4s ease-in-out;

    :active {
      transform: scale(1.2);
      transition: transform 0s;
    }

    :hover {
      color: turquoise;

      /* Block "sticky hover" effect on mobile devices */
      @media (hover: none) {
        color: white;
      }
    }

    display: inline-block;
    margin-right: 10px;
    color: white;
    text-decoration: none;

    :last-of-type {
      margin-right: 0;
    }

    .project-link_content {
      display: block;
      background-color: #191919;
      padding: 10px;
    }

    :focus {
      outline: none;

      .project-link_content {
        color: turquoise;
        outline: 5px solid turquoise;        
      }
    }

    .project-link_content:focus {
      outline: none;
    }
  }
`;

export const Hr = styled.hr`
  margin-bottom: 30px;

  @media (min-width: 576px) {
    margin-bottom: 40px;
  }

  @media (min-width: 992px) {
    margin-bottom: 50px;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;
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
    user-select: none;  
    -webkit-tap-highlight-color: transparent;
    color: inherit;

    :hover {
      color: turquoise;
    }
  }
`;

export const SectionHeading = styled.h2`
  color: red;
`;

export const UsedTech = styled(Box)`
  svg {
    width: calc(20px + (25 - 20) * ((100vw - 320px) / (1700 - 320)));
    height: calc(20px + (25 - 20) * ((100vw - 320px) / (1700 - 320)));
    margin-right: 10px;

    @media (min-width: 992px) {
      margin-right: 10px;
    }
   

    :last-of-type {
      margin-right: 0;
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
    }

    display: inline-block;
    margin-right: 10px;
    color: white;
    background-color: #191919;
    text-decoration: none;
    padding: 10px;

    :last-of-type {
      margin-right: 0;
    }
  }
`;
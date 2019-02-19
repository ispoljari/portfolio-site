import styled from 'styled-components';

export const SectionHeading = styled.h2`
  color: ${props => props.white ? 'white' : '#191919'};
`;

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
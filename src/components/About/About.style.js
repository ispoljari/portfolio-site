import styled from 'styled-components';

export const SectionHeading = styled.h2`
  color: ${props => props.white ? 'white' : '#191919'};

  .break-large {
    display: none;
  }

  @media (min-width: 768px){
    .break-large {
      display: block;
    }
  }
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

  /* Remove default focus from target elements */  
  .video-link:focus,
  .video-link_content:focus {
    outline: none;
  }

  /* Only when the outer element is reached by a keyboard, apply the focus styles. Now clicking on the element won't focus the link */  
  .video-link:focus > .video-link_content {
    color: turquoise;

    /* Apply default focus styles */
    outline: 5px solid turquoise;
  }

  a {
    user-select: none;  
    -webkit-tap-highlight-color: transparent;
    color: inherit;

    :hover {
      color: turquoise;

      @media (hover: none) {
        color: inherit;
      }
    }
  }
`;
import styled from 'styled-components';

export const Heading = styled.h1`
  @media (min-width: 450px){
    .break-under-xs {
      display: none;
    }
  }

  @media (min-width: 1400px){
    .break-small {
      display: none;
    }
  }

  .break-large {
    display: none;
  }

  @media (min-width: 450px){
    .break-large {
      display: block;
    }
  }

  span,
  .city-link,
  .city_link_content {
    color: #fff;
  }

  .city-link {
    text-decoration: none;
    display: inline-block;
    user-select: none;  
    -webkit-tap-highlight-color: transparent;
    transition: transform 0.4s ease-in-out;

    :active {
      transform: scale(1.2);
      transition: transform 0s;
    }
  }

  .city-link_content {
    display: block;
    text-decoration: underline;
  }

  .city-link:hover > .city-link_content {
    color: turquoise;

    /* Block "sticky hover" effect on mobile devices */
    @media (hover: none) {
      color: inherit;
    }
  }

  /* Remove default focus from target elements */  
  .city-link:focus,
  .city-link_content:focus {
    outline: none;
  }

  /* Only when the outer element is reached by a keyboard, apply the focus styles. Now clicking on the element won't focus the link */  
  .city-link:focus > .city-link_content {
    color: turquoise;

    /* Apply default focus styles */
    outline: 3px solid turquoise;
  }
`;

export const SocialParagraph = styled.p`
  text-align: center;
  font-size: calc(12px + (18 - 12) * ((100vw - 320px) / (1700 - 320)));

  @media (min-width: 1700px) {
    font-size: 18px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }

`;

export const SocialLink = styled.a`
  width: calc(20px + (30 - 20) * ((100vw - 320px) / (1700 - 320)));
  margin-right: 25px;
  position: relative;
  top: 1px;
  user-select: none;  
  -webkit-tap-highlight-color: transparent;

  @media (min-width: 1700px) {
    width: 30px;
  }

  @media (max-width: 320px) {
    width: 20px;
  }

  @media (min-width: 768px) {
    margin-right: 35px;
  }

  @media (min-width: 1200px) {
    margin-right: 45px;
  }

  transition: transform 0.4s ease-in-out;
  :active {
    transform: scale(1.2);
    transition: transform 0s;
  }

  .social-link_content {
    display: block;
  }

  /* Make sure nothing inside the a tag has pointer events, so clicks on the a tag will always be found on that element */
  .social-link_content > * {
    pointer-events: none;
  }

  :hover {
    .linkedin-fill,
    .medium-fill,
    .gmail-fill {
      fill: turquoise;

      /* Block "sticky hover" effect on mobile devices */
      @media (hover: none) { 
        fill: #fff;
      }
    }

    .github-stroke {
      stroke: turquoise;

      /* Block "sticky hover" effect on mobile devices */
      @media (hover: none) {
        stroke: #fff;
      }
    }
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }

  :nth-child(3),
  :nth-child(4) {
    top: 2px;
  }

  :nth-child(4) {
    width: calc(22px + (36 - 22) * ((100vw - 320px) / (1700 - 320)));

    @media (min-width: 1700px) {
      width: 36px;
    }

    @media (max-width: 320px) {
      width: 22px;
    }

  }

  :last-of-type {
    margin-right: 0;
  }

  :focus {
    outline: none;

    .social-link_content {
      outline: 3px solid turquoise;
    }

    .social-link_content .linkedin-fill,
    .social-link_content .medium-fill,
    .social-link_content .gmail-fill {
      fill: turquoise;
    }

    .social-link_content .github-stroke {
      stroke: turquoise;      
    }
  }

  .social-link_content:focus {
    outline: none;
  }
`;
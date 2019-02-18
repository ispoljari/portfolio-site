import styled from 'styled-components';

export const Heading = styled.h1`
  @media (min-width: 450px){
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
  span a {
    color: #fff;
  }

  span a {
    display: inline-block;
    user-select: none;  
    -webkit-tap-highlight-color: transparent;
    transition: transform 0.4s ease-in-out;

    :active {
      transform: scale(1.2);
      transition: transform 0s;
    }
  }

  span a:hover {
    color: turquoise;
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

  /* Make sure nothing inside the a tag has pointer events, so clicks on the a tag will always be found on that element */
  > * {
    pointer-events: none;
  }

  :hover {
    .linkedin-fill,
    .medium-fill,
    .gmail-fill {
      fill: turquoise;
    }

    .github-stroke {
      stroke: turquoise;
    }
  }

  svg {
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
`;
import styled from 'styled-components';

export const Heading = styled.h1`
  margin: 0;
  line-height: 1.5;
  font-size: calc(26px + (64 - 26) * ((100vw - 320px) / (1700 - 320)));
  padding-top: 19vh;
  padding-bottom: 20px;
  letter-spacing: 2px;

  @media (min-width: 1700px) {
    font-size: 64px;
  }

  @media (max-width: 320px) {
    font-size: 26px;
  }

  span {
    color: #fff;
  }
`;

export const SocialParagraph = styled.p`
  text-align: center;
  font-size: calc(12px + (18 - 12) * ((100vw - 320px) / (1200 - 320)));

  @media (min-width: 1200px) {
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
    max-width: 30px;
  }

  @media (max-width: 320px) {
    font-size: 20px;
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

  img {
    width: 100%;
  }

  :nth-child(3) {
    top: 3px;
  }

  :nth-child(4) {
    width: calc(23px + (35 - 23) * ((100vw - 320px) / (1700 - 320)));
    top: 3px;

    @media (min-width: 1700px) {
      max-width: 35px;
    }

    @media (max-width: 320px) {
      font-size: 23px;
    }

  }

  :last-of-type {
    margin-right: 0;
  }
`;
import styled from 'styled-components';

export const Heading = styled.h1`
  margin: 0;
  line-height: 1.5;
  font-size: calc(28px + (64 - 28) * ((100vw - 320px) / (992 - 320)));
  padding-top: 19vh;
  padding-bottom: 20px;
  letter-spacing: 2px;

  @media (min-width: 992px) {
    font-size: 64px;
  }

  @media (max-width: 320px) {
    font-size: 28px;
  }

  span {
    color: #fff;
  }
`;

export const SocialParagraph = styled.p`
  text-align: center;
  font-size: calc(12px + (18 - 12) * ((100vw - 320px) / (992 - 320)));

  @media (min-width: 992px) {
    font-size: 18px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }

`;

export const SocialLink = styled.a`
  width: 8%;
  max-width: 30px;
  margin-right: 28px;
  position: relative;
  top: 1px;

  transition: transform 0.4s ease-in-out;
  
  :active {
    transform: scale(1.3);
    transition: transform 0s;
  }

  :focus {
    border: 1px solid green;
    outline-style: solid;
    outline-color: green;
  }

  @media (min-width: 576px) {
    max-width: 35px;
  }

  @media (min-width: 1200px) {
    margin-right: 45px;
  }

  img {
    width: 100%;
  }

  :nth-child(3) {
    top: 3px;
  }

  :nth-child(4) {
    width: 9%;
    max-width: 35px;
    top: 3px;

    @media (min-width: 576px) {
      max-width: 40px;
    }
  }

  :last-of-type {
    margin-right: 0;
  }
`;
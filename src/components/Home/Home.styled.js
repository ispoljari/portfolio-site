import styled from 'styled-components';

export const Heading = styled.h1`
  margin: 0;
  line-height: 1.5;
  font-size: calc(30px + (64 - 30) * ((100vw - 320px) / (992 - 320)));
  padding-top: 19vh;
  padding-bottom: 20px;
  letter-spacing: 2px;

  @media (min-width: 992px) {
    font-size: 64px;
  }

  @media (max-width: 320px) {
    font-size: 30px;
  }

  span {
    color: #fff;
  }
`;

export const SocialLink = styled.a`
  width: 8%;
  max-width: 30px;
  margin-right: 28px;

  @media (min-width: 576px) {
    max-width: 35px;
  }

  @media (min-width: 1200px) {
    margin-right: 45px;
  }


  img {
    width: 100%;
  }

  :last-of-type {
    margin-right: 0;
  }
`;
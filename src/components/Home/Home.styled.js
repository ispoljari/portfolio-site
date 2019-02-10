import styled from 'styled-components';

export const Heading = styled.h1`
  margin: 0;
  line-height: 1.5;
  font-size: calc(30px + (64 - 30) * ((100vw - 320px) / (992 - 320)));
  padding-top: 18vh;
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
`
export const SocialImg = styled.img`
  width: 10%;
  max-width: 40px;
  margin-right: 30px;

  :last-of-type {
    margin-right: 0;
  }
`;
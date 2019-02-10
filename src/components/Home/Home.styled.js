import styled from 'styled-components';

export const Heading = styled.h1`
  margin: 0;
  line-height: 1.5;
  font-size: calc(28px + (64 - 28) * ((100vw - 320px) / (992 - 320)));
  padding-top: 18vh;
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
`
export const SocialImg = styled.img`
  width: 25px;
  margin-right: 15px;

  :last-of-type {
    width: 26px;
    margin-right: 0;
  }
`;
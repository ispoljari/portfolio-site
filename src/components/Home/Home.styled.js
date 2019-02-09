import styled from 'styled-components';

export const Heading = styled.h1`
  margin: 0;
  line-height: 1.5;
  font-size: calc(36px + (70 - 36) * ((100vw - 320px) / (900 - 320)));
  padding-top: 20vh;
  letter-spacing: 2px;

  @media (min-width: 900px) {
    font-size: 70px;
  }

  @media (max-width: 320px) {
    font-size: 36px;
  }

  span {
    color: #fff;
  }
`

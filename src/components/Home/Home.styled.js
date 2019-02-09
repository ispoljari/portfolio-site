import styled from 'styled-components';

export const Heading = styled.h1`
  margin: 0;
  line-height: 1.5;
  font-size: calc(38px + (70 - 38) * ((100vw - 320px) / (900 - 320)));
  padding-top: 20vh;

  @media (min-width: 900px) {
    font-size: 70px;
  }

  @media (max-width: 320px) {
    font-size: 38px;
  }

  span {
    color: #fff;
  }
`

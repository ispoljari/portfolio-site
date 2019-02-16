import styled from 'styled-components';

export const Quote = styled.h2`
  color: #000;
  margin: 0 0 20px 0;
  line-height: 1.5;
  font-size: calc(26px + (64 - 26) * ((100vw - 320px) / (1700 - 320)));
  letter-spacing: 2px;
  text-align: center;

  @media (min-width: 1700px) {
    font-size: 64px;
  }

  @media (max-width: 320px) {
    font-size: 26px;
  }
`;
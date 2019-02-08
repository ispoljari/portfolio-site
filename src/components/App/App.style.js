import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const Box = styled.div`
  /* visibility: ${props => props.visible ? 'visible' : 'hidden'}; */
  animation: ${props => props.visible ? fadeIn : fadeOut} 1s linear;
  transition: visibility 1s linear;
`;
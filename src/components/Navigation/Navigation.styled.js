import styled, { keyframes } from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  margin: 0;
  list-style: none;
  font-size: calc(18px + (26 - 18) * ((100vw - 320px) / (992 - 320)));

  @media (min-width: 992px) {
    font-size: 26px;
  }

  @media (max-width: 320px) {
    font-size: 18px;
  }
  
  a {
    text-decoration: none;
    color: rgba(250, 250, 250, 0.6);
    letter-spacing: 1px;
  }

  li {
    margin-right: 20px;
    padding: 0px;

    @media (min-width: 576px) {
      margin-right: 40px;
  }

    :last-of-type {
      margin-right: 0;
      padding: 10px;
      background-color: #fff;

      a {
        color: black;
      }
    }
  }
`;

const rotationIn = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img`
  width: 50px;
  padding: 20px;

  @media (min-width: 576px) {
    width: 60px;
  }

  @media (min-width: 992px) {
    width: 65px;
  }

  :active {
    animation: ${rotationIn} 0.4s linear;
  }
`;
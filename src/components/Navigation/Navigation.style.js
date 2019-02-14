import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

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
    color: ${props => props.theme.color};
    outline: none;

    :focus {
      border: 1px solid green;
      outline-style: solid;
      outline-color: green;
    }
  }

  li {
    margin-right: 20px;
    padding: 0px;

    :nth-child(n+1) {
      transition: transform 0.4s ease-in-out;
  
      :active {
        transform: scale(1.3);
        transition: transform 0s;
      }
    }

    :last-of-type {
      margin-right: 0;
      padding: 10px;
      background-color: ${props => props.theme.portfolioBoxBackground};

      a {
        color: ${props => props.theme.portfolioBoxColor}
      }
    }

    @media (min-width: 576px) {
      margin-right: 40px;
    }
  }
`;

export const LogoLink = styled(Link)`
  :focus {
    border: 1px solid green;
    outline-style: solid;
    outline-color: green;
  }

  img {
    width: 50px;
    padding: 20px;
  
    @media (min-width: 576px) {
      width: 60px;
    }
  
    @media (min-width: 992px) {
      width: 65px;
    }
  }
`;
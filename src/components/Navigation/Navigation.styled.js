import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  margin: 0;
  list-style: none;
  font-size: calc(20px + (24 - 20) * ((100vw - 320px) / (900 - 320)));

  @media (min-width: 900px) {
    font-size: 24px;
  }

  @media (max-width: 320px) {
    font-size: 20px;
  }
  
  a {
    text-decoration: none;
    color: rgba(250, 250, 250, 0.6);
    letter-spacing: 1px;
  }

  li {
    margin-right: 20px;
    padding: 0px;

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
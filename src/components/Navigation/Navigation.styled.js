import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  margin: 0;
  list-style: none;
  font-size: 20px;
  
  a {
    text-decoration: none;
    color: rgba(250, 250, 250, 0.6);
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
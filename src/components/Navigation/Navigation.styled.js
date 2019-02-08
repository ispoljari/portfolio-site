import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  padding: 5px;
  margin: 0;
  list-style: none;
  font-size: 20px;

  li {
    margin-right: 5px;
    padding: 0 5px;

    a {
      text-decoration: none;
      color: rgba(250, 250, 250, 0.6);
    }

    :last-of-type {
      margin-right: 0;
    }

    :hover {
      color: rgba(200, 200, 200, 0.2);
    }
}
`;
import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom'; 

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 13px 25px;
  background-color: ${props => props.theme.navBackground};
  margin: 0;
  list-style: none;
  font-size: calc(18px + (26 - 18) * ((100vw - 320px) / (1700 - 320)));

  @media (min-width: 1700px) {
    font-size: 26px;
  }

  @media (max-width: 320px) {
    font-size: 18px;
  }
  
  a {
    color: ${props => props.theme.navLinkColor};
    text-decoration: none;
    /* remove blue highlight when clicking quickly on mobile chrome */
    user-select: none;  
    -webkit-tap-highlight-color: transparent;
  }

  li {
    margin-right: 20px;
    padding: 0px;

    :nth-child(n+1) {
      a {
        display: inline-block;
        transition: transform 0.4s ease-in-out;
    
        :active {
          transform: scale(1.2);
          transition: transform 0s;
        }
      }
    }

    :nth-child(1) {
      a {
        color: ${props => props.theme.navLinkColor};

        
        ${props => {
            return (
              props.page === '/about' &&
                css`
                  color: turquoise;
                  -webkit-text-stroke: 1px turquoise;
                `
            )
        }};
      }
    }

    :nth-child(2) {
      a {
        color: ${props => props.theme.navLinkColor};

        
        ${props => {
            return (
              props.page === '/portfolio' &&
                css`
                  color: turquoise;
                  -webkit-text-stroke: 1px turquoise;
                `
            )
        }};
      }
    }

    :nth-child(1),
    :nth-child(2) {
      a {
        :hover {
          color: turquoise;
        }

        .nav-link_content {
          display: block;
        }
        
        :focus {
          outline: none;

          .nav-link_content {
            color: turquoise;
            outline: 3px solid turquoise;
          }
        }

        .nav-link_content:focus {
          outline: none;
        }
      }
    }

    :last-of-type {
      margin-right: 0;
    }

    @media (min-width: 576px) {
      margin-right: 40px;
    }
  }
`;

export const LogoLink = styled(Link)`
  display: inline-flex;
  /* remove blue highlight when clicking quickly on mobile chrome */
  user-select: none;  
  -webkit-tap-highlight-color: transparent;

  svg {
    display: block;
    height: 50px;
    width: 50px;

    .logo-fill {
      fill: ${props => props.theme.logoColor};
    }

    transition: transform 0.4s cubic-bezier(.54,.84,.44,.67);

    :active {
      transform: rotate(-360deg);
      transition: transform 0s;
    }
  
    @media (min-width: 576px) {
      height: 60px;
      width: 60px;
    }
  
    @media (min-width: 992px) {
      height: 65px;
      width: 65px;
    }
  }

  .logo-link_content {
    display: block;
  }

  :focus {
    outline: none;

    .logo-link_content {
      outline: 3px solid turquoise;
    }
  }

  .logo-link_content:focus {
    outline: none;
  }
`;
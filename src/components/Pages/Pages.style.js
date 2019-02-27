import styled from 'styled-components';

export const RoutesTransitionWrapper = styled.div`
   .fade-enter {
        opacity: 0.01;
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }
    
    .fade-exit {
        opacity: 1;
    }
      
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 50ms ease-in;
    }

    div.transition-group {
      position: relative;
    }

    div.route-section {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
`;
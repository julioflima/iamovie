/* eslint-disable import/prefer-default-export */
import { keyframes } from 'styled-components';

export const flipHorizontal = keyframes`
  0% {
            transform: perspective(120px) rotateY(0);
  }
  100% {
            transform: perspective(120px) rotateY(360deg);
  }
`;

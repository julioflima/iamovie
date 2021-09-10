/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { flipHorizontal } from './animation';
import { IContainer } from './IStyles';

export const Container = styled.div<IContainer>`
  position: fixed;
  display: flex;
  z-index: 999;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  align-items: center;
  align-content: center;
  height: 100vh;
  width: 100%;
  background: ${({ theme, darkness }) => `${theme.colors.quintenary.one + darkness}`};
  backdrop-filter: blur(4px);

  & > div {
    animation: ${flipHorizontal} 1.5s linear infinite;
  }
`;

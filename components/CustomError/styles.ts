/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.a`
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
  background: ${({ theme }) => `${theme.colors.quintenary.one}30`};
  backdrop-filter: blur(4px);
  font-family: var(--font-sans-one);

  & svg {
    fill: ${({ theme }) => theme.colors.secondary.two};
  }
`;

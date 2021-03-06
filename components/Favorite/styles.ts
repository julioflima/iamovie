/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { IContainer } from './IStyles';

export const Container = styled.a<IContainer>`
  margin: ${({ button, size }) => (button && size !== 'small' ? '1rem' : '0rem')};
  cursor: pointer;

  ${({ favorite }) =>
    favorite
      ? css`
          & * {
            transition: all 0.4s ease-in-out;
          }
        `
      : css`
          & * {
            transition: all 0.2s ease-in-out;
          }
        `}

  & svg {
    width: ${({ size }) => (size === 'bigger' ? '1.7rem' : size === 'big' ? '1.2rem' : '1rem')};
    height: ${({ size }) => (size === 'bigger' ? '1.7rem' : size === 'big' ? '1.2rem' : '1rem')};

    fill: ${({ favorite, theme }) => (favorite ? theme.colors.tertiary.two : theme.colors.quaternary.one)};

    ${({ button, theme }) =>
      button &&
      css`
        &:hover {
          fill: ${theme.colors.secondary.two};
        }
      `}
  }
`;

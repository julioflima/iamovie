/* eslint-disable import/prefer-default-export */
import { FavoriteBorder } from '@styled-icons/material';
import styled, { css } from 'styled-components';
import { IContainer } from './IStyles';

export const IconFavorite = styled(FavoriteBorder)`
  height: 1.2rem !important;
`;

export const Container = styled.div<IContainer>`
  margin: ${({ button }) => (button ? '1rem' : '0rem')};

  & svg {
    width: ${({ size }) => (size === 'big' ? css`1.5rem` : css`1rem`)};
    height: ${({ size }) => (size === 'big' ? css`1.5rem` : css`1rem`)};

    fill: ${({ favorite, theme }) => (favorite ? theme.colors.tertiary.two : theme.colors.quaternary.one)};

    &:hover {
      fill: ${({ favorite, theme }) => (favorite ? theme.colors.secondary.two : theme.colors.primary.four)};
    }

    transition: all 0.2s ease-in-out;
  }
`;

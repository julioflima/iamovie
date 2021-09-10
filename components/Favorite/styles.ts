/* eslint-disable import/prefer-default-export */
import { FavoriteBorder } from '@styled-icons/material';
import styled from 'styled-components';
import { IContainer } from './IStyles';

const IconFavorite = styled(FavoriteBorder)`
  height: 1.2rem !important;
`;

export const Container = styled(IconFavorite)<IContainer>`
  margin: ${({ button }) => (button ? '1rem' : '0rem')};

  width: ${(size) => (size === 'big' ? '1.5rem' : '1rem')};
  height: ${(size) => (size === 'big' ? '1.5rem' : '1rem')};

  fill: ${({ favorite, theme }) => (favorite ? theme.colors.tertiary.two : theme.colors.quaternary.one)};

  transition: all 0.2s ease-in-out;

  &:hover {
    fill: ${({ favorite, theme }) => (favorite ? theme.colors.secondary.two : theme.colors.primary.four)};
  }
`;

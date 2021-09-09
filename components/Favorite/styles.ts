/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { IIconFavorite } from './IStyles';
import { FavoriteBorder } from '@styled-icons/material';


 const IconFavorite = styled(FavoriteBorder)`
  height: 1.2rem !important;
`;

export const Container = styled(IconFavorite)<IIconFavorite>`
  margin: 1rem;
  fill: ${({ favorite, theme }) => (favorite ? theme.colors.tertiary.two : theme.colors.quaternary.one)};
  transition: all 0.2s ease-in-out;

  &:hover {
    fill: ${({ favorite, theme }) => (favorite ? theme.colors.secondary.two : theme.colors.primary.four)};
  }
`;


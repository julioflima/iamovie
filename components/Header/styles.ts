import { FavoriteBorder } from '@styled-icons/material';
import styled from 'styled-components';
import { IIconFavorite } from './IStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 0;
  height: 5rem;
  margin: 1rem;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 5rem;
`;

export const IconFavorite = styled(FavoriteBorder)`
  width: 2.75rem;
  height: 2.75rem;
`;

export const IconFavoriteContainer = styled(IconFavorite)<IIconFavorite>`
  margin: 1rem;
  fill: ${({ favorite, theme }) => (favorite ? theme.colors.tertiary.two : theme.colors.quaternary.one)};
  transition: all 0.2s ease-in-out;

  &:hover {
    fill: ${({ favorite, theme }) => (favorite ? theme.colors.secondary.two : theme.colors.primary.four)};
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

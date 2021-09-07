import { FavoriteBorder } from '@styled-icons/material';
import styled from 'styled-components';
import { IIconFavorite } from './IStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 0;
  height: 5rem;
  margin: 1rem;
  justify-content: space-between;
  flex: 1;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const IconFavorite = styled(FavoriteBorder)`
  width: 1rem;
  height: 1rem;
`;

export const IconFavoriteContainer = styled(IconFavorite)<IIconFavorite>`
  margin: 1rem;
  fill: ${({ favorite, theme }) => (favorite ? theme.colors.tertiary.two : theme.colors.quaternary.one)};
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

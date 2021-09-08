import { FavoriteBorder } from '@styled-icons/material';
import styled from 'styled-components';
import { IIconFavorite } from './IStyles';

export const ContainerFixed = styled.div`
  position: sticky;
  top: 0;
  z-index: 9999;
  width: 100%;
  background: linear-gradient(180deg, ${(props) => `${props.theme.colors.primary.one}`} 0%, transparent 100%);
  backdrop-filter: blur(4px);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 0;
  height: 5rem;
  margin: 0.5rem 1rem;
  justify-content: space-between;
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
import { FavoriteBorder } from '@styled-icons/material';
import styled from 'styled-components';
import { IIconFavorite } from './IStyles';

export const Container = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ContainerCards = styled.div`
  display: grid;
  gap: 0.5em;
  grid-template-columns: repeat(auto-fill, minmax(150px, 2fr));
  margin: 0.5rem;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  & {
    span {
      display: none;
      transition: all 0.4s ease-in-out;
    }
  }

  & > div {
    width: 100% !important;
    border-radius: 0.125rem;
  }

  &:hover {
    img {
      opacity: 0.2;
      transition: all 0.4s ease-in-out;
    }

    span {
      display: revert;
    }
  }
`;

export const ContainerOver = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ContentOver = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 100%;
  padding: 0.5rem;
`;

export const Header = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 9fr 1fr;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconFavorite = styled(FavoriteBorder)<IIconFavorite>`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  fill: ${({ favorite, theme }) => (favorite ? theme.colors.tertiary.two : theme.colors.quaternary.one)};
`;

export const Badge = styled.p`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 5rem;
  font-size: smaller;
  font-weight: 500;
  width: 2rem;
  height: 1.3rem;
  padding: 0.25rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.three};
  background: ${({ theme }) => theme.colors.secondary.one};
`;

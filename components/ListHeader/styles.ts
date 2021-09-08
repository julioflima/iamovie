import { FavoriteBorder } from '@styled-icons/material';
import styled from 'styled-components';
import { IIconFavorite } from './IStyles';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 2fr));
  height: 500px;
  overflow: hidden;
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
      transition: all 0.2s ease-in-out;
    }
  }

  & > div {
    width: 100% !important;
  }

  &:hover {
    img {
      opacity: 0.6;
      transition: all 0.8s ease-in-out;
    }

    span {
      display: revert;
      transition: all 0.2s ease-in-out;
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
  display: flex;
  flex-direction: row-reverse;
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

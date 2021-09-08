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
  gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(150px, 2fr));
  margin: 1rem;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  & > div {
    width: 100% !important;
    border-radius: 0.25rem;
  }

  &:hover {
    img {
      opacity: 0.2;
      transition: all 0.4s ease-in-out;
    }

    span {
      display: revert;
      transition: all 0.4s ease-in-out;
    }
  }
`;

export const ContainerHover = styled.span`
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
`;

export const ContentHover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 100%;
  padding: 0.5rem;
`;

export const ContentHoverHeader = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 9fr 1fr;
`;

export const IconFavorite = styled(FavoriteBorder)<IIconFavorite>`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  fill: ${({ favorite, theme }) => (favorite ? theme.colors.tertiary.two : theme.colors.quaternary.one)};
`;

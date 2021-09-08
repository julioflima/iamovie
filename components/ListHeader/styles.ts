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
      transition: all 0.8s ease-in-out;
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
  display: flex;
  flex-direction: row-reverse;
`;

export const IconFavorite = styled(FavoriteBorder)<IIconFavorite>`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  fill: ${({ favorite, theme }) => (favorite ? theme.colors.tertiary.two : theme.colors.quaternary.one)};
`;

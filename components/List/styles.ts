import styled from 'styled-components';
import { ICard, IContainer, IContainerCards } from './IStyles';

export const Container = styled.div<IContainer>`
  width: 100%;
  height: auto;
  position: ${({ position }) => position};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ContainerCards = styled.div<IContainerCards>`
  display: grid;
  gap: ${({ margin }) => margin};
  grid-template-columns: repeat(auto-fill, minmax(${({ width }) => width}px, 2fr));
  height: ${({ height }) => height}px;
  overflow: ${({ overflow }) => overflow};
  margin: ${({ margin }) => margin};
  flex: ${({ flex }) => flex};
`;

export const Card = styled.a<ICard>`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  & {
    span {
      display: none;
      transition: all ${({ transtionSpan }) => transtionSpan}s ease-in-out;
    }
  }

  & > div {
    width: 100% !important;
    border-radius: ${({ borderRadius }) => borderRadius};
  }

  &:hover {
    background: ${({ background }) => background};

    img {
      opacity: ${({ opacity }) => opacity};
      transition: all ${({ transtionImage }) => transtionImage}s ease-in-out;
    }

    span {
      display: flex;
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

  & {
    span {
      flex-direction: row;
      justify-content: flex-start;
      width: 100%;
    }

    span:last-child {
      justify-content: flex-end;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 0;
  margin: 1rem 0.5rem;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  & h1 {
    font-weight: 300;
  }

  & h2 {
    color: ${({ theme }) => theme.colors.tertiary.two};
    font-weight: 400;
    font-style: italic;
    margin-left: 0.5rem;
    display: flex;
    align-items: baseline;
  }

  & div {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }

  & div:last-child {
    width: 50vw;
    justify-content: flex-end;

    & * {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.quaternary.three};
    }

    & *:first-child {
      margin-right: 0.5rem;
    }

    & *:last-child {
      margin-left: 0.5rem;
    }
  }
`;

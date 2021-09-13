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

  & div:first-child {
    display: flex;
    flex-direction: row;
  }

  & div:last-child {
    width: 50vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    & > * {
      font-weight: 400;
      color: ${({ theme }) => theme.colors.quaternary.three};
    }

    & > *:first-child {
      margin-right: 0.5rem;
    }

    & > *:last-child {
      margin-left: 0.5rem;
    }

    & > h5 {
      padding-top: 2px;
    }
  }
`;

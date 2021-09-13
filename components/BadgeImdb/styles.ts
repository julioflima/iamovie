/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 12rem;
  transition: all 0.2s ease-in-out;
  border-radius: 0.5rem;
  border: 0.115rem solid ${({ theme }) => theme.colors.quaternary.two + 80};
  cursor: pointer;
  height: 2.5rem;

  & span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1rem;
    cursor: pointer;
    user-select: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.one + 10};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.four};
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 9;
  background: ${({ theme }) => theme.colors.secondary.six};
  border-radius: 0.4rem 0 0 0.4rem;
  padding: 1rem;

  & > div {
    top: 12px;
    right: -4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

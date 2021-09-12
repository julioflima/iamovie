/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  max-width: 100%;
  height: 2.8rem;
  border-radius: 2rem;
  padding: 0.25rem 1rem;
  color: ${({ theme }) => theme.colors.secondary.two};
  border: 0.125rem solid ${({ theme }) => theme.colors.secondary.two};
  margin-left: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.quaternary.one};
    border: 0.125rem solid ${({ theme }) => theme.colors.quaternary.one};
  }
`;

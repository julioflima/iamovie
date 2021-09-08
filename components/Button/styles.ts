/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  border-radius: 1rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.secondary.two};
  border: 0.2rem solid ${(props) => props.theme.colors.secondary.two};
  margin-left: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.primary.four};
    border: 0.2rem solid ${(props) => props.theme.colors.primary.four};
  }
`;

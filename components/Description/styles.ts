/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  flex: 1;
  overflow: hidden;
  justify-content: flex-start;

  & span {
    color: ${({ theme }) => theme.colors.primary.six};
  }
`;

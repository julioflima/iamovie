/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  text-align: justify;
  font-size: 14px;
  line-height: 1rem;

  & label {
    padding-bottom: 0.25rem;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary.six};
  }
`;

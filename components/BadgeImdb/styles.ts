/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 10rem;
  margin: 1.5rem;
  transition: all 0.2s ease-in-out;
  border-radius: 1rem;
  border: 0.125rem solid #e1e1e1;

  & span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1.5rem;
  }

  &:hover {
    background-color: red;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 9;
  background: orange;
  border-radius: 0.78rem 0 0 0.78rem;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

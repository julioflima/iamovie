import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 0.5rem;
  margin-right: calc(0.5rem - 5px);
  height: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 1 1 auto;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  max-width: 50vw;
  position: relative;

  & > div {
    height: calc(100vh - 7rem) !important;
  }
`;

export const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 50vw;
  align-items: center;
  align-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  max-width: 700px;
  margin: 0 auto;
`;

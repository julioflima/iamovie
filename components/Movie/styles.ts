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
  max-width: 35vw;
  position: relative;

  & > div {
    height: calc(100vh - 7rem) !important;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  width: 65vw;
  max-width: 700px;
  margin: 0 auto;
`;

export const Column = styled.div`
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-items: center;
`;

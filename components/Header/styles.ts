import styled from 'styled-components';

export const ContainerFixed = styled.div`
  position: fixed;
  z-index: 9999;
  width: calc(100% - 5px);
  background: linear-gradient(180deg, ${({ theme }) => `${theme.colors.primary.two}`} 0%, transparent 100%);
  backdrop-filter: blur(4px);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 0;
  height: 5rem;
  margin: 0.5rem 1rem;
  justify-content: space-between;
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoContainer = styled.a`
  display: flex;
  flex-direction: column;
  height: 5rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

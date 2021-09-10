/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 2.8rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.quaternary.one};
  margin-left: 3rem;
  transition: all 0.2s ease-in-out;
`;

export const Option = styled.a`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.quaternary.one};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-size: small;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.four};
    backdrop-filter: blur(4px);
    box-shadow: 0 0 20px 15px #0000001a;
  }
`;

export const Space = styled.span`
  writing-mode: tb-rl;
  width: 0px;
  height: 2rem;
  border-left: 1px solid ${({ theme }) => `${theme.colors.quaternary.one}20`};
  margin: 0 2rem;
`;

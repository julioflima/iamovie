import { Close, Search } from '@styled-icons/material';
import styled, { css } from 'styled-components';
import { IContainerForm, IContainerLabel } from './IStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 0;
`;

export const ContainerForm = styled.form<IContainerForm>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 2rem;
  background: transparent;
  height: 2rem;
  transition: all 0.3s ease-in-out 0.6s;
  width: 100%;

  & input {
    opacity: 0;
    outline: none;
    width: 0;
    border: none;
    position: relative;
    color: ${({ theme }) => theme.colors.quaternary.one};
    background: transparent;
    caret-color: ${({ theme }) => theme.colors.secondary.one};
    transition: width ease-in-out 0.5s;
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    font-size: 14px;
    line-height: 16px;
  }

  & input::-webkit-search-decoration,
  & input::-webkit-search-cancel-button {
    display: none;
  }

  & input:focus {
    opacity: 1;
    border: none;
  }

  & input:-moz-placeholder {
    color: ${({ theme }) => theme.colors.quaternary.two};
    font-size: 14px;
    line-height: 16px;
  }

  & input::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.quaternary.two};
    font-size: 14px;
    line-height: 16px;
  }

  ${({ theme, value }) =>
    value &&
    css`
      & {
        background: ${`${theme.colors.primary.two}80`};
      }

      & input {
        opacity: 1;
        width: 400px;
      }

      & svg {
        opacity: 1;
        width: 18px;
        margin: 0 0.5rem;
      }
    `}
`;

export const ContainerLabel = styled.div<IContainerLabel>`
  display: flex;
  align-items: center;
  justify-content: normal;
  flex-direction: column;
  position: relative;

  & label {
    top: 2.5rem;
    position: absolute;
    opacity: ${({ shown }) => (shown === 'true' ? 1 : 0)};
    width: ${({ shown }) => (shown === 'true' ? '100%' : 0)};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.quaternary.one};
  }
`;

export const IconClose = styled(Close)`
  opacity: 0;
  height: 18px;
  width: 0;
  cursor: pointer;
  z-index: 1;
`;

export const Icone = styled(Search)`
  height: 21px;
  width: 21px;
  cursor: pointer;
  z-index: 1;
  margin: 0 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    fill: ${({ theme }) => theme.colors.primary.four};
  }
`;

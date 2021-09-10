/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { IContainer } from './IStyles';

export const Container = styled.div<IContainer>`
  padding-top: ${({ paddingTop }) => paddingTop};
`;

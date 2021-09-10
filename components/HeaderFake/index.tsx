import React from 'react';
import { Container } from './styles';

const HeaderFake: React.FC<{ paddingTop?: string }> = ({ paddingTop = '6rem' }) => {
  return <Container paddingTop={paddingTop} />;
};

export default HeaderFake;

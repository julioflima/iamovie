import React from 'react';
import { Container } from './styles';

const Title: React.FC<{ subtitle: string }> = ({ children, subtitle }) => {
  return (
    <Container>
      {children}
      <br />
      <span>{`(${subtitle})`}</span>
    </Container>
  );
};

export default Title;

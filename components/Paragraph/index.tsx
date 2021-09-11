import React from 'react';
import { Container } from './styles';

const Paragraph: React.FC<{ label: string; children: string }> = ({ label, children }) => {
  return (
    <Container>
      <label>{label}</label>
      {children}
    </Container>
  );
};

export default Paragraph;

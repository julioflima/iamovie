import React from 'react';
import { Container } from './styles';

const Description: React.FC<{ runtime: number; date: string }> = ({ runtime, date }) => {
  return (
    <Container>
      <span>{runtime}</span>
      <span>
        <span>&nbsp;&nbsp;</span>
        <span>·</span>
        <span>&nbsp;&nbsp;</span>
      </span>
      <span>{new Date(date).getFullYear()}</span>
    </Container>
  );
};

export default Description;

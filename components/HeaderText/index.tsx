import React from 'react';
import { Container } from './styles';

const HeaderText: React.FC<{ title: string; items: number; total: number }> = ({ title, items, total }) => {
  return (
    <Container>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <h4>{items}</h4>
        <h5>{' of '}</h5>
        <h4>{total}</h4>
      </div>
    </Container>
  );
};

export default HeaderText;

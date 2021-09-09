import React from 'react';
import { Container, Option, Space } from './styles';

const Genrer: React.FC = () => {
  return (
    <Container>
      <Option>SUSPENSE</Option>
      <Space />
      <Option>DRAMA</Option>
      <Space />
      <Option>ACTION</Option>
    </Container>
  );
};

export default Genrer;

import React from 'react';
import { Container } from './styles';

const Button: React.FC<{ favorite?: boolean }> = ({ favorite = false }) => {
  return <Container favorite={favorite} />;
};

export default Button;

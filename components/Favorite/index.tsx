import React from 'react';
import { Container } from './styles';

const Favorite: React.FC<{ favorite?: boolean; size?: 'big' | 'small'; button?: boolean }> = ({
  favorite = false,
  button = false,
  size = 'small'
}) => {
  return <Container favorite={favorite} size={size} button={button} />;
};

export default Favorite;

import { FavoriteBorder } from '@styled-icons/material';
import React from 'react';
import { Container } from './styles';

const Favorite: React.FC<{ favorite?: boolean; size?: 'big' | 'bigger' | 'small'; button?: boolean }> = ({
  favorite = false,
  button = false,
  size = 'small'
}) => {
  return (
    <Container button={button} favorite={favorite} size={size}>
      <FavoriteBorder />
    </Container>
  );
};

export default Favorite;

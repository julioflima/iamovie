import React from 'react';
import { Container, IconFavorite } from './styles';

const Favorite: React.FC<{ favorite?: boolean; size?: 'big' | 'small'; button?: boolean }> = ({
  favorite = false,
  button = false,
  size = 'small'
}) => {
  return (
    <Container button={button} favorite={favorite} size={size}>
      <IconFavorite />
    </Container>
  );
};

export default Favorite;

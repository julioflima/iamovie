import { FavoriteBorder } from '@styled-icons/material';
import React from 'react';
import { Container } from './styles';

const Favorite: React.FC<
  {
    favorite?: boolean;
    size?: 'big' | 'bigger' | 'small';
    button?: boolean;
  } & React.HTMLAttributes<HTMLAnchorElement>
> = ({ favorite = false, button = false, size = 'small', ...rest }) => {
  return (
    <Container button={button} favorite={favorite} size={size} {...rest}>
      <FavoriteBorder />
    </Container>
  );
};

export default Favorite;

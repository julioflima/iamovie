import React from 'react';
import Favorite from '../Favorite';

const FavoriteButton: React.FC = () => {
  const handleClick = (): void => {
    fetch('/api/list', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'Favorit List', description: 'Favorite list of Atlântico' })
    });
  };

  return <Favorite button size="bigger" onClick={handleClick} />;
};

export default FavoriteButton;

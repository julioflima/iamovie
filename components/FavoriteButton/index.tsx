import React, { useContext } from 'react';
import useFetch from 'use-fetching';
import FavoritesContext from '../../contexts/FavoritesContext';
import Favorite from '../Favorite';

const FavoriteButton: React.FC<{ movieId: number }> = ({ movieId }) => {
  const { favoritesState } = useContext(FavoritesContext);

  const { call: addMovie } = useFetch({});
  const { call: updateFavorites } = useFetch({ responseState: favoritesState });

  const handleClick = async (): Promise<void> => {
    await addMovie(`/api/list/${movieId}`);
    await updateFavorites(`/api/list`);
  };

  return <Favorite button size="bigger" onClick={handleClick} />;
};

export default FavoriteButton;

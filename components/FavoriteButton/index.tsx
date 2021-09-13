import React, { useContext } from 'react';
import useFetch from 'use-fetching';
import FavoritesContext from '../../contexts/FavoritesContext';
import { IMovie } from '../../interfaces/IMovie';
import Favorite from '../Favorite';

const FavoriteButton: React.FC<{ movieId: number }> = ({ movieId }) => {
  const { favoritesState } = useContext(FavoritesContext);
  const [favorites, setFavorites] = favoritesState;

  const favorite = favorites?.items?.some((movie) => movie.id === movieId);

  const { call: toggleMovie } = useFetch();
  const { call: getFavorites } = useFetch({ responseState: favoritesState });

  const handleClick = async (): Promise<void> => {
    setFavorites((oldFavorites) => ({
      ...oldFavorites,
      items: favorite
        ? oldFavorites?.items?.filter((movie) => movie.id !== movieId)
        : [...oldFavorites?.items, { id: movieId } as IMovie]
    }));

    await toggleMovie(`/api/list/movie/${movieId}`, { method: 'POST' });
    await getFavorites('/api/list/favorites');
  };

  return <Favorite onClick={handleClick} favorite={favorite} button size="bigger" />;
};

export default FavoriteButton;

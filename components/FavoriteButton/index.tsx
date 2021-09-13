import React, { MouseEvent, useContext } from 'react';
import useFetch from 'use-fetching';
import FavoritesContext from '../../contexts/FavoritesContext';
import { IMovie } from '../../interfaces/IMovie';
import Favorite from '../Favorite';

const FavoriteButton: React.FC<{ movieId: number; size?: 'big' | 'bigger' | 'small' }> = ({
  movieId,
  size = 'bigger'
}) => {
  const { favoritesState } = useContext(FavoritesContext);
  const [favorites, setFavorites] = favoritesState;

  const favorite = favorites?.items?.some((movie) => movie.id === movieId);

  const { call: toggleMovie } = useFetch();
  const { call: getFavorites } = useFetch({ responseState: favoritesState });

  const handleClick = async (e: MouseEvent): Promise<void> => {
    e.preventDefault();

    setFavorites((oldFavorites) => ({
      ...oldFavorites,
      items: favorite
        ? oldFavorites?.items?.filter((movie) => movie.id !== movieId)
        : [...oldFavorites?.items, { id: movieId } as IMovie]
    }));

    await toggleMovie(`/api/list/movie/${movieId}`, { method: 'POST' });
    await getFavorites('/api/list/favorites');
  };

  return <Favorite onClick={handleClick} favorite={favorite} button size={size} />;
};

export default FavoriteButton;

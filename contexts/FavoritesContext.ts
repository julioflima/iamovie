import { createContext } from 'react';
import { IList } from '../interfaces/IList';
import { TFavoritesContext } from '../types/TFavoritesContext';

const favoritesContext: TFavoritesContext = {
  favoritesState: [<IList>{}, () => {}]
};

const FavoritesContext = createContext<TFavoritesContext>(favoritesContext);

export default FavoritesContext;

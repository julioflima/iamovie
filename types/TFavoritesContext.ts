import { Dispatch, SetStateAction } from 'react';
import { IList } from '../interfaces/IList';

export type TFavoritesContext = {
  favoritesState: [IList, Dispatch<SetStateAction<IList>>];
};

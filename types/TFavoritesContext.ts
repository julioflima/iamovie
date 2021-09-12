import { IList } from '../interfaces/IList';

export type TFavoritesContext = {
  favoritesState: [IList, (favorites: IList) => void];
};

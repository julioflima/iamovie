import { IMovie } from './IMovie';

export interface ICheckList {
  id: string;
  item_present: boolean;
}
export interface IList {
  created_by: string;
  description: string;
  favorite_count: number;
  id: string;
  items: IMovie[];
  item_count: number;
  iso_639_1: string;
  name: string;
  poster_path: null;
}

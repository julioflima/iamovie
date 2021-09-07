import { IMovie } from './IMovie';

export interface IApi {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

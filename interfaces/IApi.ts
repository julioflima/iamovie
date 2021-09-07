import { IMovie } from './IMovie';

/* eslint-disable camelcase */
export interface IApi {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

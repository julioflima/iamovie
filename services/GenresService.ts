/* eslint-disable class-methods-use-this */

import { IApi } from '../interfaces/IApi';
import { IGenres } from '../interfaces/IGenres';
import TmdbService from './TmdbService';

export default class GenresService extends TmdbService {
  public async genre(genre_id: number): Promise<IApi> {
    return this.api.get('/3/discover/movie', {
      params: {
        api_key: this.api_key,
        language: this.language,
        with_genres: genre_id
      }
    });
  }

  public async getGenres(): Promise<IGenres> {
    return this.api.get('/3/genre/movie/list', {
      params: {
        api_key: this.api_key,
        language: this.language
      }
    });
  }
}

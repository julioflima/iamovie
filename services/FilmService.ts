/* eslint-disable class-methods-use-this */

import { IApi } from '../interfaces/IApi';
import { IMovieComplete } from '../interfaces/IMovie';
import ApiService from './ApiService';

export default class FilmService extends ApiService {
  private api_key: string;

  private language: string;

  private include_adult: boolean;

  constructor() {
    super();
    this.api_key = '8bc6f6b692d1adc6f1d9d684a9b4cc5f';
    this.language = 'en-US';
    this.include_adult = false;
  }

  public search(query: string): Promise<IApi> {
    return this.api.get('/3/search/movie', {
      params: {
        api_key: this.api_key,
        language: this.language,
        include_adult: this.include_adult,
        query
      }
    });
  }

  public popular(): Promise<IApi> {
    return this.api.get('/3/movie/popular', {
      params: {
        api_key: this.api_key,
        language: this.language
      }
    });
  }

  public top(): Promise<IApi> {
    return this.api.get('/3/movie/top_rated', {
      params: {
        api_key: this.api_key,
        language: this.language
      }
    });
  }

  public get(id: number): Promise<IMovieComplete> {
    return this.api.get(`/3/movie/${id}`, {
      params: {
        api_key: this.api_key,
        language: this.language
      }
    });
  }
}

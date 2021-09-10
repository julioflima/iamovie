/* eslint-disable class-methods-use-this */

import { IApi } from '../interfaces/IApi';
import { IMovieComplete } from '../interfaces/IMovie';
import ApiService from './ApiService';

export default class MoviesService extends ApiService {
  private api_key: string;

  private language: string;

  constructor() {
    super();
    this.api_key = '8bc6f6b692d1adc6f1d9d684a9b4cc5f';
    this.language = 'en-US';
  }

  public async search(query: string): Promise<IApi> {
    return this.api.get('/3/search/movie', {
      params: {
        api_key: this.api_key,
        language: this.language,
        query
      }
    });
  }

  public async popular(): Promise<IApi> {
    return this.api.get('/3/movie/popular', {
      params: {
        api_key: this.api_key,
        language: this.language
      }
    });
  }

  public async top(): Promise<IApi> {
    return this.api.get('/3/movie/top_rated', {
      params: {
        api_key: this.api_key,
        language: this.language
      }
    });
  }

  public async get(id: number): Promise<IMovieComplete> {
    return this.api.get(`/3/movie/${id}`, {
      params: {
        api_key: this.api_key,
        language: this.language
      }
    });
  }
}

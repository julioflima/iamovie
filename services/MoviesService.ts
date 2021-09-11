/* eslint-disable class-methods-use-this */

import { IApi } from '../interfaces/IApi';
import { IMovieComplete } from '../interfaces/IMovie';
import ApiService from './ApiService';

export default class MoviesService extends ApiService {
  private api_key: string;

  private language: string;

  private list_id: string;

  constructor() {
    super();
    this.api_key = '8bc6f6b692d1adc6f1d9d684a9b4cc5f';
    this.language = 'en-US';
    this.list_id = 'en-US';
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
        api_key: this.api_key
      }
    });
  }

  public async createList(): Promise<IMovieComplete> {
    return this.api.post(
      `/3/list`,
      {
        name: 'Favorit List',
        description: 'Favorite list of Atlântico.',
        language: 'en'
      },
      {
        params: {
          api_key: this.api_key
        }
      }
    );
  }

  public async addMovie(id: number): Promise<IMovieComplete> {
    return this.api.post(
      `/3/list/${this.list_id}/add_item`,
      {
        media_id: id
      },
      {
        params: {
          api_key: this.api_key
        }
      }
    );
  }

  public async removeMovie(id: number): Promise<IMovieComplete> {
    return this.api.post(
      `/3/list/${this.list_id}/add_item`,
      {
        media_id: id
      },
      {
        params: {
          api_key: this.api_key
        }
      }
    );
  }
}

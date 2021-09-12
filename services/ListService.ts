/* eslint-disable class-methods-use-this */

import { IMovieComplete } from '../interfaces/IMovie';
import TmdbService from './TmdbService';

export default class ListService extends TmdbService {
  public async createList(): Promise<IMovieComplete> {
    await this.checkSession();

    return this.api.post(
      `/3/list`,
      {
        name: 'Favorit List',
        description: 'Favorite list of Atlântico.',
        language: 'en'
      },
      {
        params: {
          api_key: this.api_key,
          session: this.session_id
        }
      }
    );
  }

  public async addMovie(id: number): Promise<IMovieComplete> {
    await this.checkSession();

    return this.api.post(
      `/3/list/${this.list_favorite_id}/add_item`,
      {
        media_id: id
      },
      {
        params: {
          api_key: this.api_key,
          session: this.session_id
        }
      }
    );
  }

  public async removeMovie(id: number): Promise<IMovieComplete> {
    await this.checkSession();

    return this.api.post(
      `/3/list/${this.list_favorite_id}/add_item`,
      {
        media_id: id
      },
      {
        params: {
          api_key: this.api_key,
          session: this.session_id
        }
      }
    );
  }
}

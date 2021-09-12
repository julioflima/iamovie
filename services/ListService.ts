/* eslint-disable class-methods-use-this */

import { ICheckList } from '../interfaces/IList';
import TmdbService from './TmdbService';

// This class I'll not be runned in browser, gonna have an error if was runned.
export default class ListService extends TmdbService {
  public async createList(name: string, description: string): Promise<unknown> {
    await this.checkSession();

    return this.api.post(
      `/3/list`,
      {
        name,
        description,
        language: this.language
      },
      {
        params: {
          api_key: this.api_key,
          session_id: this.session_id
        }
      }
    );
  }

  public async addMovie(id: number): Promise<unknown> {
    await this.checkSession();

    return this.api.post(
      `/3/list/${this.list_favorite_id}/add_item`,
      {
        media_id: id
      },
      {
        params: {
          api_key: this.api_key,
          session_id: this.session_id
        }
      }
    );
  }

  public async removeMovie(id: number): Promise<unknown> {
    await this.checkSession();

    return this.api.post(
      `/3/list/${this.list_favorite_id}/add_item`,
      {
        media_id: id
      },
      {
        params: {
          api_key: this.api_key,
          session_id: this.session_id
        }
      }
    );
  }

  public async checkMovie(id: number): Promise<ICheckList> {
    await this.checkSession();

    return this.api.get(`/3/list/${this.list_favorite_id}/item_status`, {
      params: {
        api_key: this.api_key,
        movie_id: id
      }
    });
  }

  public async get(id: number): Promise<ICheckList> {
    await this.checkSession();

    return this.api.get(`/3/list/${id}`, {
      params: {
        api_key: this.api_key,
        language: this.language
      }
    });
  }
}

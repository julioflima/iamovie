/* eslint-disable class-methods-use-this */

import ApiService from './ApiService';

export default class TmdbService extends ApiService {
  protected base_url: string;

  protected api_key: string;

  protected language: string;

  protected list_favorite_id: number;

  protected session_id: string;

  constructor() {
    const baseUrl = String(process.env.BASE_URL);

    super({}, baseUrl);

    this.base_url = baseUrl;
    this.api_key = String(process.env.API_KEY);
    this.language = String(process.env.LANGUAGE);
    this.list_favorite_id = Number(process.env.LIST_FAVORITE_ID);
    this.session_id = String(process.env.SESSION_ID);
  }
}

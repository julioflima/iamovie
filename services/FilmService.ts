/* eslint-disable class-methods-use-this */

import ApiService from './ApiService';

export default class FilmService extends ApiService {
  private path: string;

  api_key: string;

  language: string;

  include_adult: boolean;

  constructor() {
    super();
    this.api_key = '8bc6f6b692d1adc6f1d9d684a9b4cc5f';
    this.path = '/3/search/movie';
    this.language = 'en-US';
    this.include_adult = false;
  }

  // language=en-US&query=spider&page=1&include_adult=false

  public search(query: string): Promise<any> {
    return this.api.get(this.path, {
      params: {
        api_key: this.api_key,
        language: this.language,
        include_adult: this.include_adult,
        query
      }
    });
  }
}

/* eslint-disable class-methods-use-this */

import { ISession } from '../interfaces/ISession';
import ApiService from './ApiService';

export default class MoviesService extends ApiService {
  protected base_url: string;

  protected api_key: string;

  protected language: string;

  protected list_favorite_id: number;

  protected session: ISession;

  protected session_id: string;

  constructor() {
    const baseUrl = String(process.env.BASE_URL);

    super({}, baseUrl);

    this.base_url = baseUrl;
    this.api_key = String(process.env.API_KEY);
    this.language = String(process.env.LANGUAGE);
    this.list_favorite_id = Number(process.env.LIST_FAVORITE_ID);
    this.session = <ISession>{};
    this.session_id = '';

    this.updateSession();
  }

  protected async checkSession(): Promise<void> {
    if (!this.session.success || new Date(this.session.expires_at) < new Date()) {
      await this.updateSession();
      await this.checkSession();
    }
  }

  private async updateSession(): Promise<void> {
    this.session = await this.getSession();
    this.session_id = this.session.guest_session_id;
  }

  private async getSession(): Promise<ISession> {
    return this.api.get('/3/authentication/guest_session/new', {
      params: {
        api_key: this.api_key
      }
    });
  }
}

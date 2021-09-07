/* eslint-disable class-methods-use-this */

import ApiService from './ApiService';

export default class AuthorizationService extends ApiService {
  private path: string;

  constructor() {
    super({ 'Access-Control-Allow-Origin': '*' }, '/');
    this.path = '/sso/identity/json/attributes';
  }
}

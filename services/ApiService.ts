/* eslint-disable class-methods-use-this */
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

export default abstract class ApiService {
  protected readonly api: AxiosInstance;

  protected readonly isLocal: boolean;

  protected readonly isTest: boolean;

  public constructor(
    headers: {} = {},
    baseURL: string = 'https://cadastros-bbcorretora.bbs.desenv.bb.com.br'
  ) {
    this.api = axios.create({
      baseURL,
      headers
    });

    this.initializeResponseInterceptorApi();
    this.isLocal = window.location.origin.includes('localhost');
    this.isTest = this.isLocal && process.env.NODE_ENV === 'test';
  }

  private initializeResponseInterceptorApi(): void {
    this.api.interceptors.response.use(this.handleResponseApi, this.handleErrorApi);
  }

  private handleResponseApi({ data }: AxiosResponse): AxiosResponse {
    return data;
  }

  private handleErrorApi<T>(error: Error | AxiosError<T>): Error | AxiosError<T> {
    return error;
  }
}

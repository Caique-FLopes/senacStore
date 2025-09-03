import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default class BaseService {
  protected api: AxiosInstance;

  constructor(baseURL = 'https://fakestoreapi.com') {
    this.api = axios.create({ baseURL });
  }
  protected async get<T>(url: string): Promise<T[]> {
    const respose: AxiosResponse<T[]> = await this.api.get(url);
    return respose.data;
  }
  protected async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const respose: AxiosResponse<T> = await this.api.post(url, data, config);
    return respose.data;
  }
}

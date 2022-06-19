import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { ACCESS_TOKEN_KEY, API_CONFIG } from '../../../utils/constants';
import StorageManager from '../../../utils/storageManager';
import { errorToast } from '../ToastService';

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const headers: Readonly<Record<string, string | boolean>> = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
};

// We can use the following function to inject the JWT token through an interceptor
// We get the `accessToken` from the localStorage that we set when we authenticate
const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    const token = StorageManager.getItem(ACCESS_TOKEN_KEY);
    // TODO: must check this remove replace in future
    const bearerToken = `Bearer ${token}`.replace(/['"]+/g, '');

    if (token != null) {
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = bearerToken;
    }

    return config;
  } catch (error: any) {
    console.log('injectToken error', error);

    throw new Error(error);
  }
};

class RequestService {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: API_CONFIG.BASE_URL,
      responseType: 'json' as const,
      // withCredentials: true,
      headers,
    });

    http.interceptors.request.use(injectToken, (error) =>
      Promise.reject(error));

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        return RequestService.handleError(response);
      },
    );

    this.instance = http;
    return http;
  }

  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    const res = this.http.get<T, R>(url, config);
    return res;
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  private static handleError = (error: any) => {
    const status = error?.status;

    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        errorToast('Internal Server Error');
        break;
      }

      case StatusCode.Forbidden: {
        // Handle Forbidden
        errorToast('Forbidden');
        break;
      }

      case StatusCode.Unauthorized: {
        // Handle Unauthorized
        errorToast('Unauthorized');
        break;
      }

      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        errorToast('Too Many Requests');
        break;
      }

      default:
        null;
    }

    return Promise.reject(error);
  };
}

export const http = new RequestService();

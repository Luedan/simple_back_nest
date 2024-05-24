/* istanbul ignore file */
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

/**
 * Adapter for making HTTP requests.
 */
@Injectable()
export class HttpAdapter {
  private readonly logger = new Logger(HttpAdapter.name);
  private preConfiguration: AxiosRequestConfig;

  constructor(private readonly _http: HttpService) {}

  /**
   * Sends a GET request to the specified URL and returns the response data.
   *
   * @template R - The type of the response data.
   * @param url - The URL to send the GET request to.
   * @param config - Optional configuration for the request.
   * @returns A promise that resolves to the response data.
   * @throws If there is an error fetching the data.
   */
  async get<R>(url: string, config?: AxiosRequestConfig): Promise<R> {
    const { data } = await firstValueFrom(
      this._http.get<R>(url, { ...this.preConfiguration, ...config }).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'Error fetching data';
        }),
      ),
    );
    return data;
  }

  /**
   * Sends a POST request to the specified URL with the provided data.
   *
   * @template R - The type of the response data.
   * @template T - The type of the request data.
   * @param url - The URL to send the request to.
   * @param data - The data to send in the request body.
   * @param config - Optional configuration for the request.
   * @returns A promise that resolves to the response data.
   * @throws An error if there was a problem fetching the data.
   */
  async post<R, T>(
    url: string,
    data: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    const { data: responseData } = await firstValueFrom(
      this._http
        .post<R>(url, data, { ...this.preConfiguration, ...config })
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'Error fetching data';
          }),
        ),
    );
    return responseData;
  }

  /**
   * Sends a PUT request to the specified URL with the provided data.
   *
   * @template R The type of the response data.
   * @template T The type of the request data.
   * @param {string} url The URL to send the request to.
   * @param {T} data The data to send with the request.
   * @param {AxiosRequestConfig} [config] The optional request configuration.
   * @returns {Promise<R>} A promise that resolves to the response data.
   * @throws {string} If an error occurs while fetching the data.
   */
  async put<R, T>(
    url: string,
    data: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    const { data: responseData } = await firstValueFrom(
      this._http
        .put<R>(url, data, { ...this.preConfiguration, ...config })
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'Error fetching data';
          }),
        ),
    );
    return responseData;
  }

  /**
   * Sends a PATCH request to the specified URL with the provided data.
   *
   * @template R The type of the response data.
   * @template T The type of the request data.
   * @param url - The URL to send the PATCH request to.
   * @param data - The data to be sent in the request body.
   * @param config - Optional configuration for the request.
   * @returns A promise that resolves to the response data.
   * @throws If an error occurs during the request.
   */
  async patch<R, T>(
    url: string,
    data: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    const { data: responseData } = await firstValueFrom(
      this._http
        .patch<R>(url, data, { ...this.preConfiguration, ...config })
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'Error fetching data';
          }),
        ),
    );
    return responseData;
  }

  /**
   * Sends a DELETE request to the specified URL and returns the response data.
   *
   * @template R - The type of the response data.
   * @param url - The URL to send the DELETE request to.
   * @param config - Optional configuration for the request.
   * @returns A promise that resolves to the response data.
   * @throws Throws an error if there is an error fetching the data.
   */
  async delete<R>(url: string, config?: AxiosRequestConfig): Promise<R> {
    const { data } = await firstValueFrom(
      this._http.delete<R>(url, { ...this.preConfiguration, ...config }).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'Error fetching data';
        }),
      ),
    );
    return data;
  }

  /**
   * Sets the pre-configuration for the HTTP adapter.
   *
   * @param config - The configuration to set.
   */
  initialize(config: AxiosRequestConfig): void {
    this.preConfiguration = config;
  }
}

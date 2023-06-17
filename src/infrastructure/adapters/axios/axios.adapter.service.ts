
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { AxiosAdapterInterface } from './axios.adapter.Interface';

@Injectable()
export class AxiosAdapterService implements AxiosAdapterInterface {

    private axios: AxiosInstance = axios;

    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {

        try {
            const data = await this.axios.get<T>(url);
            return data.data;
        } catch (error) {
            console.log(error.response.status);
            throw new InternalServerErrorException(error);
        }
    };

    post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
        throw new Error('Method not implemented.');
    };

    delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        throw new Error('Method not implemented.');
    };

    patch<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
        throw new Error('Method not implemented.');
    };




}

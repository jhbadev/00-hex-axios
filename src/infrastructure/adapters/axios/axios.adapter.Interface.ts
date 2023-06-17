import { AxiosRequestConfig } from "axios";

export interface AxiosAdapterInterface {

    get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;

    post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T>;

    delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;

    patch<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T>;

}
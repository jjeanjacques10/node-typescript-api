import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export interface RequestConfig extends AxiosRequestConfig { }

export interface Response<T = any> extends AxiosResponse<T> { }

export class Request {
    constructor(private request = axios) { }

    public get<T>(
        url: string,
        config: RequestConfig = {}
    ): Promise<Response<T>> {
        return this.request.get<T, Response<T>>(url, config);
    }

    public static isRequestError(error: AxiosError): boolean {
        return !!(error.response && error.response.status);
    }
}
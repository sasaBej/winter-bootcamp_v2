import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const httpConfig: AxiosRequestConfig = {
  baseURL: "https://countriesnow.space/api/v0.1/countries",
  timeout: 50000,
  headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
  }
};

export const BaseApi: AxiosInstance = axios.create(httpConfig);
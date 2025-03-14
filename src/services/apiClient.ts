import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

class APICLient<T> {
  public constructor(private endpoint: string) {}

  public getAll = (config?: AxiosRequestConfig<T> | undefined) => {
    const controller = new AbortController();
    const request = axiosInstance.get<T>(this.endpoint, config);

    return { request, cancel: () => controller.abort() };
  };
}

export default function createAPIClient<T>(endpoint: string) {
  return new APICLient<T>(endpoint);
}

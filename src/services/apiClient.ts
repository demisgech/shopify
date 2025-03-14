import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

export interface FetchProductResponse<T> {
  products: T[];
  skip: number;
  limit: number;
  total: number;
}

class APICLient<T> {
  public constructor(private endpoint: string) {}

  public getAll = async (config?: AxiosRequestConfig<T> | undefined) => {
    const response = await axiosInstance.get<FetchProductResponse<T>>(
      this.endpoint,
      config
    );
    return response.data;
  };
}

export default function createAPIClient<T>(endpoint: string) {
  return new APICLient<T>(endpoint);
}

import createAPIClient from "./apiClient";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

export default function productService(endpoint: string) {
  return createAPIClient<Product>(endpoint);
}

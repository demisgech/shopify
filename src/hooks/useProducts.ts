// import { CanceledError, type AxiosError } from "axios";
// import { useEffect, useState } from "react";
import createAPIClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

interface FetchProductResponse {
  products: Product[];
}

const useProducts = (category?: string) => {
  // const [products, setProducts] = useState<Product[]>([]);
  // const [error, setError] = useState("");
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   const endpoint = category ? `/products/category/${category}` : `/products`;
  //   const { request, cancel } =
  //     createAPIClient<FetchProductResponse>(endpoint).getAll();

  //   setLoading(true);
  //   request
  //     .then((response) => {
  //       setLoading(false);
  //       setProducts(response.data.products);
  //     })
  //     .catch((error) => {
  //       if (error instanceof CanceledError) return;
  //       setError((error as AxiosError).message);
  //       setLoading(false);
  //     });
  //   }, [category]);

  // return () => cancel();

  return useQuery<FetchProductResponse, Error>({
    queryKey: ["products", category],
    queryFn: () => {
      const endpoint = category
        ? `/products/category/${category}`
        : `/products`;
      const { request } =
        createAPIClient<FetchProductResponse>(endpoint).getAll();
      return request.then((response) => response.data);
    },
  });

  // return { products, error, isLoading };
};

export default useProducts;

// import { CanceledError, type AxiosError } from "axios";
// import { useEffect, useState } from "react";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import createAPIClient from "../services/apiClient";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

interface FetchProductResponse {
  products: Product[];
  skip: number;
  limit: number;
  total: number;
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

  return useInfiniteQuery<FetchProductResponse, Error>({
    queryKey: ["products", category],
    queryFn: ({ pageParam = 1 }) => {
      const endpoint = category
        ? `/products/category/${category}`
        : `/products`;
      const { request } = createAPIClient<FetchProductResponse>(
        endpoint
      ).getAll({
        params: {
          skip: pageParam,
          limit: 20,
        },
      });
      return request.then((response) => response.data);
    },
    gcTime: 1000 * 60 * 60 * 24, // 24h
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
    initialPageParam: 0,
  });

  // return { products, error, isLoading };
};

export default useProducts;

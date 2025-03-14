import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { FetchProductResponse } from "../services/apiClient";
import productService, { Product } from "../services/productService";

const useProducts = (category?: string) => {
  return useInfiniteQuery<FetchProductResponse<Product>, Error>({
    queryKey: ["products", category],
    queryFn: ({ pageParam = 1, signal }) => {
      const endpoint = category
        ? `/products/category/${category}`
        : `/products`;
      return productService(endpoint).getAll({
        params: {
          skip: pageParam,
          limit: 20,
        },
        signal: signal,
      });
    },
    gcTime: 1000 * 60 * 60 * 24, // 24h
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
    initialPageParam: 0,
  });
};

export default useProducts;

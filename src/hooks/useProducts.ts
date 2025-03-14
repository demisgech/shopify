import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { FetchProductResponse } from "../services/apiClient";
import productService, { Product } from "../services/productService";
import useProductQueryStore, {
  ProductQuery,
} from "../store/useProductQueryStore";

const useProducts = () => {
  const { productQuery } = useProductQueryStore();

  const determineEndpoint = (productQuery: ProductQuery) => {
    if (productQuery.category)
      return "/products/category/" + productQuery.category;
    if (productQuery.q) return "/products/search";
    return "/products";
  };

  return useInfiniteQuery<FetchProductResponse<Product>, Error>({
    queryKey: ["products", productQuery],
    queryFn: ({ pageParam = 1, signal }) => {
      const endpoint = determineEndpoint(productQuery);
      return productService(endpoint).getAll({
        params: {
          ...productQuery,
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

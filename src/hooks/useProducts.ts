import axios, { CanceledError, type AxiosError } from "axios";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

interface FetchProductResponse {
  products: Product[];
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<FetchProductResponse>("https://dummyjson.com/products", {
        signal: controller.signal,
      })
      .then((response) => {
        setLoading(false);
        setProducts(response.data.products);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { products, error, isLoading };
};

export default useProducts;

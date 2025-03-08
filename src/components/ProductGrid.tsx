import axios, { CanceledError, type AxiosError } from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

interface FetchProductResponse {
  products: Product[];
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get<FetchProductResponse>("https://dummyjson.com/products")
      .then((response) => {
        setLoading(false);
        setProducts(response.data.products);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <span className="loading loading-spinner loading-md" />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductGrid;

import { Product } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  error: string;
  isLoading: boolean | false;
}

const ProductGrid = ({ products, error, isLoading }: Props) => {
  if (isLoading) return <span className="loading loading-spinner loading-md" />;

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductGrid;

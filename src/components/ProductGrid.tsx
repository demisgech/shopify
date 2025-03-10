import { useContext } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import CategoryContext from "../contexts/categoryContext";

const ProductGrid = () => {
  const { category } = useContext(CategoryContext);
  const { data: products, error, isLoading } = useProducts(category);

  if (isLoading) return <span className="loading loading-spinner loading-md" />;

  if (error) return <p className="text-red-500">{error.message}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {products?.products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductGrid;

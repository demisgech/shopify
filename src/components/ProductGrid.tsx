import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { products, error, isLoading } = useProducts();

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

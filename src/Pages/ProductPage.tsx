import { useState } from "react";
import ProductCategoryList from "../components/ProductCategoryList";
import ProductGrid from "../components/ProductGrid";
import useProductCategoryList from "../hooks/useProductCategoryList";
import useProducts from "../hooks/useProducts";

const ProductPage = () => {
  const categoeryQuery = useProductCategoryList();
  const [selectedCategory, setSelectedCategory] = useState("");

  const productQuery = useProducts(selectedCategory);

  const onSelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col items-center gap-10 justify-center">
      <div className={"p-4"}>
        <ProductCategoryList
          onSelect={onSelect}
          {...categoeryQuery}
          category={selectedCategory}
        />
      </div>
      <main className="p-2 m-auto">
        <h2 className="text-3xl text-sky-400 mb-5 ml-5 font-bold">
          {selectedCategory ? selectedCategory : ""} products
        </h2>
        <ProductGrid {...productQuery} />
      </main>
    </div>
  );
};

export default ProductPage;

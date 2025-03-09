import { useState } from "react";
import ProductCategoryList from "../components/ProductCategoryList";
import ProductGrid from "../components/ProductGrid";
import useProductCategoryList from "../hooks/useProductCategoryList";
import useProducts from "../hooks/useProducts";

interface Props {
  isOpen: boolean | false;
}

const ProductPage = ({ isOpen }: Props) => {
  const categoeryQuery = useProductCategoryList();
  const [selectedCategory, setSelectedCategory] = useState("");

  const productQuery = useProducts(selectedCategory);

  const onSelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <aside
        className={`p-4 bg-gray-200 w-[250px] fixed top-0 left-0 transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0`}
      >
        <ProductCategoryList
          onSelect={onSelect}
          {...categoeryQuery}
          category={selectedCategory}
        />
      </aside>
      <main className="p-2 m-auto">
        <h2 className="text-3xl text-sky-400 mb-5 ml-5 font-bold">Products</h2>
        <ProductGrid {...productQuery} />
      </main>
    </>
  );
};

export default ProductPage;

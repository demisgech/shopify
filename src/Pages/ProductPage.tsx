import ProductCategoryList from "../components/ProductCategoryList";
import ProductGrid from "../components/ProductGrid";
import CategoryProvider from "../contexts/CategoryProvider";

const ProductPage = () => {
  return (
    <CategoryProvider>
      <div className="flex flex-col items-center gap-10 justify-center">
        <div className={"p-4"}>
          <ProductCategoryList />
        </div>
        <main className="p-2 m-auto">
          <h2 className="text-3xl text-cyan-600 mb-5 ml-5 font-bold">
            products
          </h2>
          <ProductGrid />
        </main>
      </div>
    </CategoryProvider>
  );
};

export default ProductPage;

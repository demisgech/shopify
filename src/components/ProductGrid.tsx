import { Fragment, useContext } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import CategoryContext from "../contexts/categoryContext";
import ProductCardContainer from "./ProductCardContainer";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Box from "./Box";

const ProductGrid = () => {
  const { category } = useContext(CategoryContext);
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useProducts(category);
  const { lastItemRef } = useInfiniteScroll({
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  });

  if (isLoading) return <span className="loading loading-spinner loading-md" />;

  if (error) return <p className="text-red-500">{error.message}</p>;

  return (
    <Box>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {data?.pages.map((pages, index) => (
          <Fragment key={index}>
            {pages.products.map((product, index) => (
              <ProductCardContainer
                key={index}
                ref={index === pages.products.length - 1 ? lastItemRef : null}
              >
                <ProductCard product={product} key={product.id} />
              </ProductCardContainer>
            ))}
          </Fragment>
        ))}
      </div>
      {hasNextPage && (
        <div className="flex justify-center py-10">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      )}
    </Box>
  );
};

export default ProductGrid;

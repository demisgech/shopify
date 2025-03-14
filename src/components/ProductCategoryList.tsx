import { ChangeEvent } from "react";
import useProductCategoryList from "../hooks/useProductCategoryList";
import useProductQueryStore from "../store/useProductQueryStore";

const ProductCategoryList = () => {
  const { categories, error, isLoading } = useProductCategoryList();

  const {
    productQuery: { category },
    setCategory,
  } = useProductQueryStore();
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setCategory(event.target.value);
  };

  if (isLoading)
    return <span className="loading loaing-spinner laoding-md"></span>;

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h3 className="p-3 pb-2 font-bold text-lg tracking-wide opacity-60">
        Category list
      </h3>
      <select onChange={onChange} value={category} className="select select-md">
        <option value="">Select category</option>
        {categories &&
          categories.map((category, index) => (
            <option key={index} className="pb-1">
              {category}
            </option>
          ))}
      </select>
    </div>
  );
};

export default ProductCategoryList;

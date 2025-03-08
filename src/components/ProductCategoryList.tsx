import useProductCategoryList from "../hooks/useProductCategoryList";

const ProductCategoryList = () => {
  const { categories, error, isLoading } = useProductCategoryList();

  if (isLoading)
    return <span className="loading loaing-spinner laoding-md"></span>;

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <ul className="menu list bg-base-100 rounded-box shadow-md">
      <h3 className="p-3 pb-2 font-bold text-lg tracking-wide opacity-60">
        Category list
      </h3>
      {categories.map((category, index) => (
        <li key={index} className="pb-1">
          <a className="text-lg">{category}</a>
        </li>
      ))}
    </ul>
  );
};

export default ProductCategoryList;

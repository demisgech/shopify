import { ChangeEvent } from "react";

interface Props {
  categories: string[];
  error: string;
  isLoading: boolean | false;
  category: string;
  onSelect: (category: string) => void;
}

const ProductCategoryList = ({
  onSelect,
  category,
  categories,
  error,
  isLoading,
}: Props) => {
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    onSelect(event.target.value);
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

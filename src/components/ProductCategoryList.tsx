import { useEffect, useState } from "react";
import createAPIClient from "../services/apiClient";
import { CanceledError, type AxiosError } from "axios";

const ProductCategoryList = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = createAPIClient<string[]>(
      "/products/category-list"
    ).getAll();
    setLoading(true);
    request
      .then((response) => {
        setLoading(false);
        setCategories(response.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setLoading(false);
      });
    return () => cancel();
  }, []);

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

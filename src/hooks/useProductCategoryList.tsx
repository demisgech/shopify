import { CanceledError, type AxiosError } from "axios";
import { useState, useEffect } from "react";
import createAPIClient from "../services/apiClient";

const useProductCategoryList = () => {
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

  return { categories, error, isLoading };
};

export default useProductCategoryList;

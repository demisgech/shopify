import { createContext } from "react";

interface CategoryContextType {
  category: string;
  setCategory: (category: string) => void;
}

const CategoryContext = createContext<CategoryContextType>(
  {} as CategoryContextType
);

export default CategoryContext;

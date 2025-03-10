import { useState, type ReactNode } from "react";
import CategoryContext from "./categoryContext";

interface Props {
  children: ReactNode;
}

const CategoryProvider = ({ children }: Props) => {
  const [category, setCategory] = useState("");
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;

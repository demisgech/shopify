import { create } from "zustand";

export interface ProductQuery {
  q: string; // searchableText
  category: string;
}

interface ProductQueryType {
  productQuery: ProductQuery;
  setSearchableText: (searchableText: string) => void;
  setCategory: (category: string) => void;
}

const useProductQueryStore = create<ProductQueryType>((set) => ({
  productQuery: {} as ProductQuery,
  setSearchableText: (q) =>
    set((store) => ({
      productQuery: { ...store.productQuery, q },
    })),
  setCategory: (category) =>
    set((store) => ({
      productQuery: { ...store.productQuery, category },
    })),
}));

export default useProductQueryStore;

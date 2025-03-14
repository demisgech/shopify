import { create } from "zustand";
import { Product } from "../services/productService";

interface ProductStoreType {
  addedProducts: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  isCartPage: boolean;
  setCartPage: (isCart: boolean) => void;
  increaseProduct: (id: number) => void;
  decreaseProduct: (id: number) => void;
}

const useProductStore = create<ProductStoreType>((set) => ({
  addedProducts: [],
  addProduct: (product) =>
    set((store) => ({
      addedProducts: [...store.addedProducts, product],
    })),
  removeProduct: (id) =>
    set((store) => ({
      addedProducts: store.addedProducts.filter((product) => product.id !== id),
    })),
  isCartPage: true,
  setCartPage: (isCart) =>
    set(() => ({
      isCartPage: isCart,
    })),
  increaseProduct: (id) =>
    set((store) => ({
      addedProducts: store.addedProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product
      ),
    })),
  decreaseProduct: (id) =>
    set((store) => ({
      addedProducts: store.addedProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ),
    })),
}));

export default useProductStore;

import { create } from "zustand";
import { Product } from "../services/productService";

interface CartStoreType {
  cart: Product[];
  addToCart: (cartItem: Product | ((prevCart: Product[]) => Product[])) => void;
}

const useCartStore = create<CartStoreType>((set) => ({
  cart: [],
  addToCart: (cartItem) =>
    set((store) => ({
      cart:
        typeof cartItem === "function"
          ? cartItem(store.cart)
          : [...store.cart, cartItem],
    })),
}));

export default useCartStore;

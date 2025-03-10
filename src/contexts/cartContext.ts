import { createContext } from "react";
import type { CartItem } from "../components/CartCard";
import type { Product } from "../hooks/useProducts";

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export default CartContext;

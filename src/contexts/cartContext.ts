import { createContext } from "react";
import { Product } from "../services/productService";

interface CartContextType {
  cart: Product[];
  addToCart: (cartItem: Product | ((prevCart: Product[]) => Product[])) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export default CartContext;

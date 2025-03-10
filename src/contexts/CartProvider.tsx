import { useState, type ReactNode } from "react";
import CartContext from "./cartContext";
import type { CartItem } from "../components/CartCard";
import type { Product } from "../hooks/useProducts";

interface Props {
  children: ReactNode;
}

const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const exsitingCart = prevCart.find((item) => item.id === product.id);
      if (exsitingCart)
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

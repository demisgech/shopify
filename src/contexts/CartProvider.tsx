import { useState, type ReactNode } from "react";
import CartContext from "./cartContext";
import { Product } from "../hooks/useProducts";

interface Props {
  children: ReactNode;
}

const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<Product[]>([]);
  const addToCart = (
    Product: Product | ((prevCart: Product[]) => Product[])
  ) => {
    setCart((prevCart) => {
      if (typeof Product === "function") return Product(prevCart);
      return [...prevCart, { ...Product, quantity: 1 }];
    });
  };
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

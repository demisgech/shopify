import useCartStore from "../store/useCartStore";
import CartCard from "./CartCard";

const CartGrid = () => {
  const cart = useCartStore((selector) => selector.cart);

  return (
    <>
      <h1 className="text-6xl text-cyan-900">Cart List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {cart.map((cartItem) => (
          <CartCard key={cartItem.id} product={cartItem} />
        ))}
      </div>
    </>
  );
};

export default CartGrid;

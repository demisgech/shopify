import useProductStore from "../store/useProductStore";
import CartCard from "./CartCard";

const CartGrid = () => {
  const addedProducts = useProductStore((selector) => selector.addedProducts);

  return (
    <>
      <h1 className="text-6xl text-cyan-900">Cart List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {addedProducts.map((cartItem) => (
          <CartCard key={cartItem.id} product={cartItem} />
        ))}
      </div>
    </>
  );
};

export default CartGrid;

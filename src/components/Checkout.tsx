import { Link } from "react-router-dom";
import useProductStore from "../store/useProductStore";

const Checkout = () => {
  const addedProducts = useProductStore((selector) => selector.addedProducts);
  const totalPrice = addedProducts
    .reduce(
      (totalPrice, product) => totalPrice + product.price * product.quantity,
      0
    )
    .toFixed(2);
  const totalQuantity = addedProducts.reduce(
    (totalQuantity, product) => totalQuantity + product.quantity,
    0
  );
  return (
    <div className="m-auto card bg-base-300 max-w-[400px] min-w-[300px] mt-10 h-[50vh] p-5 align-middle shadow-2xl rounded-2xl">
      <div className="flex justify-between mb-10 mt-30">
        <span className="text-2xl">Total Price</span>
        <span className="text-lg">${totalPrice}</span>
      </div>
      <div className="flex justify-between mb-10">
        <span className="text-2xl">total Items</span>
        <span className="text-lg">{totalQuantity}</span>
      </div>
      <Link
        to="/login"
        className="btn btn-success btn-block text-white text-xl"
      >
        Check out
      </Link>
    </div>
  );
};

export default Checkout;

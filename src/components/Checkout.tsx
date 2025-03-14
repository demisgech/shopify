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
    <div className="w-full max-w-md mx-auto">
      <div className="card shadow-lg bg-white p-6">
        <p className="text-lg font-semibold mb-2">Total Price: ${totalPrice}</p>
        <p className="text-lg font-semibold mb-6">
          Total Items: {totalQuantity}
        </p>
        <Link
          to="/login"
          className="btn btn-success btn-block text-white text-xl"
        >
          Check out
        </Link>
      </div>
    </div>
  );
};

export default Checkout;

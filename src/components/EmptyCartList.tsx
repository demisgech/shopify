import { Link } from "react-router-dom";
import emptyCartImage from "../assets/emptycart.webp";

const EmptyCartList = () => {
  return (
    <div className="flex flex-col gap-1 p-5 h-[70vh] items-center justify-between mb-5">
      <img src={emptyCartImage} className="max-w-[100%] rounded-4xl" />
      <div>
        <h1 className="text-6xl bg-linear-to-bl from-violet-800 to-green-300 text-blue-650 bg-clip-text text-transparent sm:mb-5">
          Your cart is empty!
        </h1>
        <p className="py-3 text-xl">
          Looks like you haven't added anything to your cart. Go ahead & explore
          top categories
        </p>
        <Link className="btn btn-primary" to="/products">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default EmptyCartList;

import { useState } from "react";
import { Link } from "react-router-dom";

import cartLogo from "../assets/cartlogo.png";
import useProductStore from "../store/useProductStore";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const addedProducts = useProductStore((selector) => selector.addedProducts);
  const totalQuantity = addedProducts.reduce(
    (totalQuantity, product) => totalQuantity + product.quantity,
    0
  );
  return (
    <nav className="navbar sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="flex-1 gap-2">
        <Link to="/" className="btn btn-ghost text-xl">
          Shopify
        </Link>
      </div>

      <div className="hidden lg:flex space-x-6">
        <Link to="/checkout">Checkout</Link>
        <Link to="/products">Products</Link>
        <div className="bordered">
          <SearchInput />
        </div>
        <Link to="/login" className="btn btn-success text-lg text-white">
          Log in
        </Link>
      </div>

      <Link to="/carts" className="border-1 border-cyan-200 rounded-sm mx-4">
        <div className="indicator">
          <img
            src={cartLogo}
            alt="cart logo"
            className="w-[30px] h-[30px] object-cover"
          />
          <span className="badge badge-error badge-sm text-white rounded-full indicator-item">
            {totalQuantity}
          </span>
        </div>
      </Link>
      <div className="flex-none lg:hidden">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <ul className="menu menu-sm absolute top-16 right-1 shadow-md p-4 w-50 bg-white rounded-lg z-10 lg:hidden">
          <li>
            <Link
              to="/checkout"
              className="block py-2"
              onClick={() => setOpen(false)}
            >
              Checkout
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="block py-2"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <div className="bordered my-3">
              <SearchInput />
            </div>
          </li>
          <li>
            <Link
              to="/login"
              className="block py-2 btn btn-success text-white btn-block"
              onClick={() => setOpen(false)}
            >
              Log in
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

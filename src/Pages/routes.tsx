import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import Layout from "./Layout";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: "",
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",

        element: <ProductPage />,
      },
      {
        path: "/carts",

        element: <CartPage />,
      },
      {
        path: "/checkout",

        element: <CheckoutPage />,
      },
    ],
  },
  {},
]);

export default router;

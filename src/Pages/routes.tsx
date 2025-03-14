import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import Layout from "./Layout";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import ErrorPage from "./ErrorPage";
import PrivateRoutes from "./private/PrivateRoutes";
import LoginPage from "./LoginPage";

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
      {
        path: "/login",

        element: <LoginPage />,
      },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [{}],
  },
]);

export default router;

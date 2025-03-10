import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import Layout from "./Layout";
import CartPage from "./CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
    ],
  },
]);

export default router;

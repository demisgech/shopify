import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import Layout from "./Layout";

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
    ],
  },
]);

export default router;

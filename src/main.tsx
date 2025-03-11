import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import router from "./Pages/routes.tsx";
import CartProvider from "./contexts/CartProvider.tsx";
import "./index.css";
import ButtonProvider from "./contexts/ButtonProvider.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      gcTime: 1000 * 60 * 60 * 24, // 24h
      staleTime: 10 * 1000, //10sec
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ButtonProvider>
          <RouterProvider router={router} />
        </ButtonProvider>
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>
);

import { forwardRef, ReactNode } from "react";
import Box from "./Box";

interface Props {
  children: ReactNode;
}

const ProductCardContainer = forwardRef<HTMLDivElement, Props>(
  ({ children }, ref) => {
    return <Box ref={ref}>{children}</Box>;
  }
);

export default ProductCardContainer;

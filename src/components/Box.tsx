import { forwardRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Box = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return <div ref={ref}>{children}</div>;
});

export default Box;

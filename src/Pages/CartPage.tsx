import CartGrid from "../components/CartGrid";
import EmptyCartList from "../components/EmptyCartList";
import useProductStore from "../store/useProductStore";

function CartPage() {
  const addedProducts = useProductStore((selector) => selector.addedProducts);
  return (
    <div className="flex flex-col items-center gap-10 justify-center">
      {addedProducts.length === 0 ? <EmptyCartList /> : <CartGrid />}
    </div>
  );
}

export default CartPage;

import useProductStore from "../store/useProductStore";
import type { Product } from "../hooks/useProducts";

interface Props {
  product: Product;
}

const CartCard = ({ product }: Props) => {
  const isCartPage = useProductStore((selector) => selector.isCartPage);
  const increaseProduct = useProductStore(
    (selector) => selector.increaseProduct
  );
  const decreaseProduct = useProductStore(
    (selector) => selector.decreaseProduct
  );
  const addedProducts = useProductStore((selector) => selector.addedProducts);

  const updatedProduct =
    addedProducts.find((prod) => prod.id === product.id) || product;

  const totalPrice = (updatedProduct.price * updatedProduct.quantity).toFixed(
    2
  );
  return (
    <div className="card shadow-md bg-base-100 max-w-[250px] cursor-pointer">
      <img src={updatedProduct.thumbnail} alt="cart" className="" />

      <div className="card-body">
        <h3 className="card-title">{updatedProduct.title}</h3>
        <div className="flex justify-between">
          <span className="badge badge-secondary">${totalPrice}</span>
          <span className="badge badge-success">{updatedProduct.quantity}</span>
        </div>
        <div className="flex gap-2">
          <button
            className="btn btn-primary"
            onClick={() => {
              decreaseProduct(updatedProduct.id);
            }}
          >
            -
          </button>
          <button className="btn btn-primary" disabled={isCartPage}>
            Add to Cart
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              increaseProduct(updatedProduct.id);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

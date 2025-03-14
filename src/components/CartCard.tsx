import { Product } from "../services/productService";
import useProductStore from "../store/useProductStore";

interface Props {
  product: Product;
}

const CartCard = ({ product }: Props) => {
  const { addedProducts, increaseProduct, decreaseProduct, removeProduct } =
    useProductStore();
  const updatedProduct =
    addedProducts.find((prod) => prod.id === product.id) || product;

  const totalPrice = (updatedProduct.price * updatedProduct.quantity).toFixed(
    2
  );

  const onDecrement = (id: number) => {
    const addedProduct = addedProducts.find((product) => product.id === id);
    if (addedProduct && addedProduct.quantity > 1) decreaseProduct(id);
    else removeProduct(id);
  };

  return (
    <div className="card shadow-md bg-base-100 max-w-[250px] cursor-pointer relative">
      <button
        type="button"
        className="btn btn-error absolute top-2 right-2"
        onClick={() => {
          removeProduct(updatedProduct.id);
        }}
      >
        X
      </button>
      <img src={updatedProduct.thumbnail} alt="cart" className="w-[100%]" />

      <div className="card-body">
        <h3 className="card-title">{updatedProduct.title}</h3>
        <div className="flex justify-between">
          <span className="badge badge-secondary">${totalPrice}</span>
          <span className="badge badge-success">{updatedProduct.quantity}</span>
        </div>
        <div className="flex flex-row justify-around items-center gap-2">
          <button
            className="btn btn-primary"
            onClick={() => onDecrement(updatedProduct.id)}
          >
            -
          </button>
          <span className="text-center">{updatedProduct.quantity}</span>
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

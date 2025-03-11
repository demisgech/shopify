import { useContext } from "react";
import CartContext from "../contexts/cartContext";
import useProductStore from "../contexts/useProductStore";
import { Product } from "../hooks/useProducts";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useContext(CartContext);
  const {
    addedProducts,
    addProduct,
    increaseProduct,
    decreaseProduct,
    removeProduct,
  } = useProductStore();
  const isAdded = addedProducts.some(
    (addedProduct) => addedProduct.id === product.id
  );

  const onIncrement = (id: number) => {
    addToCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
    increaseProduct(id);
  };

  const onDecrement = (id: number) => {
    addToCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
    const addedProduct = addedProducts.find((product) => product.id === id);
    if (addedProduct && addedProduct.quantity > 1) decreaseProduct(id);
    else removeProduct(id);
  };

  const handAddToCart = () => {
    addToCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    addProduct({ ...product, quantity: 1 });
  };
  return (
    <div className="card bg-base-50 shadow-lg max-w-[500px]">
      <img src={product.thumbnail} className="h-55 object-cover" alt="Shoes" />

      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <div className="card-actions justify-center">
          {isAdded ? (
            <div className="flex gap-1">
              <button
                className="btn btn-secondary"
                onClick={() => onDecrement(product.id)}
              >
                -
              </button>
              <button className="btn btn-secondary" disabled>
                Add to Cart
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => onIncrement(product.id)}
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={handAddToCart}
              className="btn btn-primary btn-block rounded-2xl"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

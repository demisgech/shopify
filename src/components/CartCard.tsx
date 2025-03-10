import type { Product } from "../hooks/useProducts";

export interface CartItem extends Product {
  quantity: number;
}

interface Props {
  cartItem: CartItem;
}

const CartCard = ({ cartItem }: Props) => {
  return (
    <div className="card shadow-md bg-base-100 max-w-[250px] cursor-pointer">
      <img src={cartItem.thumbnail} alt="cart" className="" />

      <div className="card-body">
        <h3 className="card-title">{cartItem.title}</h3>
        <div className="flex space-x-4">
          <button className="btn btn-primary">-</button>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-primary">+</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

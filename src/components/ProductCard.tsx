interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="card bg-base-50 shadow-lg max-w-[500px]">
      <img src={product.thumbnail} className="h-55 object-cover" alt="Shoes" />

      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

interface FetchProductResponse {
  products: Product[];
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    axios
      .get<FetchProductResponse>("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="card bg-base-50 shadow-lg max-w-[500px]"
        >
          <img
            src={product.thumbnail}
            className="h-55 object-cover"
            alt="Shoes"
          />

          <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <p>{product.description}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;

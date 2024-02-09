import ProductCard from "./Product";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: { rate: number; count: number };
}

const ProductFeed = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:-mt-52 mx-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}


    </div>
  );
};

export default ProductFeed;

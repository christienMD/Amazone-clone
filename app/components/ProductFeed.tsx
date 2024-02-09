import ProductCard from "./Product";
import Image from "next/image";

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
      {products.slice(0, 5).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      <Image
        className="md:col-span-full w-full px-5"
        src="https://links.papareact.com/dyz"
        alt=""
        width={125}
        height={125}
        layout="responsive"
      />

      <div className="md:col-span-2">
        {products.slice(5, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {products.slice(6, products.length).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductFeed;

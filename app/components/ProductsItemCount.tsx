"use client";

import { useContext } from "react";
import ProductsContext from "../contexts/productsContext";

const ProductsItemCount = () => {
  const { products } = useContext(ProductsContext);

  return (
    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded full font-bold text-black">
      {products.length}
    </span>
  );
};

export default ProductsItemCount;

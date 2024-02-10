"use client";

import { useRouter } from "next/navigation";
import ProductsItemCount from "./ProductsItemCount";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const ShoppingBasket = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/checkout")}
      className="relative link flex items-center"
    >
      <ProductsItemCount />
      <ShoppingCartIcon className="h-10" />
      <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
    </div>
  );
};

export default ShoppingBasket;

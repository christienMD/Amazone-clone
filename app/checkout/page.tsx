"use client";

import Image from "next/image";
import Header from "../components/Header";
import { useContext } from "react";
import ProductsContext from "../contexts/productsContext";
import CheckoutProduct from "../components/CheckoutProduct";

const CheckOutPage = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex container mx-14">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            alt="checkout-img"
            src="https://links.papareact.com/ikj"
            width={900}
            height={245}
            className="object-contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-5">
              {products.length === 0
                ? "Your Amazone Shopping Basket is empty"
                : "Shopping Basket"}
            </h1>

            {products.map((productItem, index) => (
              <CheckoutProduct key={index} productItem={productItem}/>
            ))}
          </div>
        </div>

        {/* right */}
        <div className=""></div>
      </main>
    </div>
  );
};

export default CheckOutPage;

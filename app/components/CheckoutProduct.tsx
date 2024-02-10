"use client";

import Image from "next/image";
import Currency from "react-currency-formatter";
import { useState } from "react";
import { Product } from "../reducers/productsReducer";
import StarRating from "./StarRating";

interface Props {
  productItem: Product;
}

const CheckoutProduct = ({ productItem }: Props) => {
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="grid grid-cols-5">
      <Image
        src={productItem.image}
        alt=""
        height={140}
        width={140}
        objectFit="contain"
      />

      {/* middle col */}
      <div className="col-span-3 ms-6 mx-5">
        <p>{productItem.title}</p>
        <div>
          <StarRating />
        </div>
        <p className="text-xs my-2 line-clamp-3">{productItem.description}</p>
        <Currency quantity={productItem.price} />

        {hasPrime && (
          <div className="flex items-center space-x-2 mt-1">
            <Image
              loading="lazy"
              src="https://links.papareact.com/fdw"
              alt=""
              height={10}
              width={10}
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;

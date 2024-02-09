"use client";

import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { Product } from "./ProductFeed";
import StarRating from "./StarRating";
import { CheckIcon } from "@heroicons/react/24/solid";

interface Props {
  product: Product;
}

const ProductCard = ({
  product: { category, image: imageUrl, title, description, price },
}: Props) => {
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="border relative flex flex-col m-4 bg-white z-30 p-5">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={imageUrl}
        alt="product-image"
        height={100}
        width={100}
        className="object-contain"
      />

      <h4 className="my-3">{title}</h4>
      <StarRating />
      <p className="text-xs line-clamp-2 my-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <CheckIcon className="h-12 font-extrabold text-yellow-500" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add To Basket</button>
    </div>
  );
};

export default ProductCard;

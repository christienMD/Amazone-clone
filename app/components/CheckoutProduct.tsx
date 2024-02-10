"use client";

import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";
import { useState, useContext } from "react";
import { Product } from "../reducers/productsReducer";
import StarRating from "./StarRating";
import ProductsContext from "../contexts/productsContext";

interface Props {
  productItem: Product;
}

const CheckoutProduct = ({ productItem }: Props) => {
  const [hasPrime] = useState(Math.random() < 0.5);
  const { dispatch } = useContext(ProductsContext);

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
            <CheckIcon className="h-12 font-extrabold text-yellow-500" />

            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 my-auto justify-self-end">
        <button
          onClick={() =>
            dispatch({ type: "ADD_ITEM_TO_BASCKET", product: productItem })
          }
          className="mt-auto button"
        >
          Add To Basket
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "REMOVE_ITEM_FROM_BASKET",
              productId: productItem.id,
            })
          }
          className="mt-auto button"
        >
          Remove From Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;

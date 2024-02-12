import React from "react";

interface Props {
  price: number;
}

export function Currency({ price }: Props) {
  // Format the price using Intl.NumberFormat
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD", // Assuming USD currency, you can modify this if needed
    maximumFractionDigits: 2,
  }).format(price);

  return <span className="font-medium text-gray-700">{formattedPrice}</span>;
}

export default Currency;

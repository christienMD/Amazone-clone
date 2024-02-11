import { Product } from "@/app/reducers/productsReducer";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request: NextRequest, response: NextResponse) {
  const { products, email } = await request.json();

  const transformedItems = products.map((product: Product) => ({
    price_data: {
      currency: "usd",
      unit_amount: product.price * 100,
      product_data: {
        name: product.title,
        images: [product.image],
      },
    },
    quantity: 1,
  }));

  const checkoutSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_options: [
      {
        shipping_rate: "shr_1OiSlEG1PM8eEvON3mLco2CL", // Use the shipping rate ID
      },
    ],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(products.map((product: Product) => product.image)),
    },
  });

  return NextResponse.json({ id: checkoutSession.id }, { status: 200 });
}

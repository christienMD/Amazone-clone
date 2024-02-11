"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import Header from "../components/Header";
import { useContext } from "react";
import Currency from "react-currency-formatter";
import { loadStripe } from "@stripe/stripe-js";
import ProductsContext from "../contexts/productsContext";
import CheckoutProduct from "../components/CheckoutProduct";
import { productTotal } from "../reducers/productsReducer";
import axios from "axios";
const stripePromise = loadStripe(process.env.stripe_public_key!);

const CheckOutPage = () => {
  const { status, data: session } = useSession();
  const { products } = useContext(ProductsContext);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    //call the backend to create a checkout session
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      products,
      email: session?.user?.email,
    });

    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result?.error) console.error(result.error.message);
  };

  return (
    <div className="bg-gray-100">

      <main className="lg:flex mx-3 md:mx-8">
        {/* left */}
        <div className="flex-grow my-5 shadow-sm">
          <Image
            alt="checkout-img"
            src="https://links.papareact.com/ikj"
            width={800}
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
              <CheckoutProduct key={index} productItem={productItem} />
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {products.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({products.length} items):{" "}
              </h2>
              <span className="font-bold">
                <Currency quantity={productTotal(products)} />
              </span>

              <button
                onClick={createCheckoutSession}
                role="link"
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-200 cursor-not-allowed"
                }`}
              >
                {status === "unauthenticated"
                  ? "Sign in to checkout"
                  : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default CheckOutPage;

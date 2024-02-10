import Image from "next/image";
import Header from "../components/Header";

const CheckOutPage = () => {
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex container mx-14">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image 
          alt="checkout-img"
          src='https://links.papareact.com/ikj'
          width={900}
          height={245 }
          objectFit="contain"

          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-5">Your Shopping Bascket</h1>
          </div>
        </div>

        {/* right */}
        <div className=""></div>
      </main>
    </div>
  );
};

export default CheckOutPage;

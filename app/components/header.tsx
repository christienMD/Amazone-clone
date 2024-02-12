"use client";

import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Logo from "@/components/Logo";
import Link from "next/link";
import ShoppingBasket from "./ShoppingBasket";

const Header = () => {
  const { status, data: session } = useSession();

  return (
    <header className="sticky top-0 z-50">
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 gap-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Logo />
        </div>

        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        {/* right */}

        <div className="text-white flex items-center text-xs space-x-6 mx-6">
          <Link href="/api/auth/signin" className="link">
            <p>
              {status === "authenticated" ? (
                <Link href="/api/auth/signout">
                  Hello {session.user!.name}{" "}
                </Link>
              ) : (
                "Sign In"
              )}
            </p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </Link>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <ShoppingBasket />
        </div>
      </div>

      {/* bottom nav */}
      <div className="flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white text-sm">
        <p className="h-6 mr-2 link flex gap-1 items-center">
          <Bars3Icon className="h-6" /> All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazone Business</p>
        <p className="link">Today&apos;s Deals</p>
        <p className="hidden link lg:inline-flex">Electronics</p>
        <p className="hidden link lg:inline-flex">Food & Grocery</p>
        <p className="hidden link lg:inline-flex">Prime</p>
        <p className="hidden link lg:inline-flex">Buy Again</p>
        <p className="hidden link lg:inline-flex">Shopper Toolkit</p>
        <p className="hidden link lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;

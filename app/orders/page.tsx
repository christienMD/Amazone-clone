"use client";
import { useSession } from "next-auth/react";

const OrdersPage = () => {
  const { status, data: session } = useSession();

  return (
    <div>
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Or ders
        </h1>

        {session ? (
          <h2>x Orders</h2>
        ) : (
          <h2>Please sign in to see your Orders</h2>
        )}
        <div className="mt-5 space-y-4">
            
        </div>
      </main>
    </div>
  );
};

export default OrdersPage;

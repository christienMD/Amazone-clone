"use client";

import { ReactNode, useReducer } from "react";
import ProductsContext from "./contexts/productsContext";
import productsReducer from "./reducers/productsReducer";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [products, dispatch] = useReducer(productsReducer, []);

  return (
    <html lang="en">
      <ProductsContext.Provider value={{ products, dispatch }}>
        {children}
      </ProductsContext.Provider>
    </html>
  );
};

export default ContextProvider;

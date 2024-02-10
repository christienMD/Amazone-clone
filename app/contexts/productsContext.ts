import React, { Dispatch } from "react";
import { Product, ProductAction } from "../reducers/productsReducer";

interface ProductsContextType {
    products: Product[]
    dispatch: Dispatch<ProductAction>;
}


const ProductsContext =React.createContext<ProductsContextType>({} as ProductsContextType)

export default ProductsContext
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: { rate: number; count: number };
}

interface AddToBasket {
  type: "ADD_ITEM_TO_BASCKET";
  product: Product;
}

interface RemoveFromBasket {
  type: "REMOVE_ITEM_FROM_BASKET";
  productId: number;
}

export type ProductAction = AddToBasket | RemoveFromBasket;

const productsReducer = (
  products: Product[],
  action: ProductAction
): Product[] => {
  if (action.type === "ADD_ITEM_TO_BASCKET")
    return [action.product, ...products];
  if (action.type === "REMOVE_ITEM_FROM_BASKET") {
   const productIndex = products.findIndex(productItem => productItem.id === action.productId);

   let newProducts = [...products];
   (productIndex >= 0) ? newProducts.splice(productIndex, 1): console.warn(`can't remove product (id: ${action.productId}) as it's not in the basket`)
   products = newProducts;
   return products
  }
    // return products.filter((product) => product.id !== action.productId);

  return products;
};

export default productsReducer;

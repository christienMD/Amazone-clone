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
  if (action.type === "REMOVE_ITEM_FROM_BASKET")
    return products.filter((product) => product.id !== action.productId);

  return products;
};

export default productsReducer;

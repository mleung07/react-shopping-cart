import { Product } from "./products";
import { AnyAction } from "redux";

// actions
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export interface CartItem {
  productId: string;
  quantity: number;
}
export interface CartProduct extends CartItem {
  product: Product | undefined;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cart = (state: CartState = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemToAdd = state.items.findIndex((item) => {
        return item.productId === action.id;
      });
      if (itemToAdd > -1) {
        let newState = [...state.items];
        newState[itemToAdd].quantity += 1;

        return {
          ...state,
          items: newState,
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            productId: action.id,
            quantity: 1,
          },
        ],
      };
    case REMOVE_FROM_CART:
      const otherItems = state.items.filter(
        (item) => item.productId !== action.id
      );
      return {
        ...state,
        items: otherItems,
      };
    default:
      return state;
  }
};

export default cart;

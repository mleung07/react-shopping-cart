// import { createSelector } from "reselect";
import { RootState } from "../store";
import { ProductWithCategory } from "../reducers/products";
import { CartProduct } from "../reducers/cart";

export const getAllProducts = (state: RootState) => state.products.products;

export const getProductById = (state: RootState, id: string) => {
  return state.products.products.find((product) => {
    return product.id === id;
  });
};

export const getProductWithCategoryById = (state: RootState, id: string) => {
  const thisProduct:
    | ProductWithCategory
    | undefined = state.products.products.find((product) => {
    return product.id === id;
  });
  if (!thisProduct) {
    return null;
  }
  const thisCategory = state.categories.categories.find((category) => {
    return category.id === id;
  });
  if (!thisCategory) {
    return thisProduct;
  }
  thisProduct.category = thisCategory;
  return thisProduct;
};

export const getProductsByCategoryId = (state: RootState, id: string) => {
  return state.products.products.filter((product) => {
    return product.categoryId === id;
  });
};

export const getAllCategories = (state: RootState) => {
  return state.categories.categories;
};

export const getCategoryById = (state: RootState, id: string) => {
  return state.categories.categories.find((category) => {
    return category.id === id;
  });
};

export const getCartItems = (state: RootState) => {
  const items = [...state.cart.items] as CartProduct[];
  // TODO: use lodash keyBy
  const products = state.products.products;
  return items.map((item) => {
    const currentProduct = products.find((product) => {
      return product.id === item.productId;
    });
    item.product = currentProduct;
    return item;
  });
};

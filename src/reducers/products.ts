import { Category } from "./categories";
import { AnyAction } from "redux";
// import type { RootState } from "../store";

// actions
export const INIT_PRODUCTS = "INIT_PRODUCTS";

export interface Product {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  slug: string;
  thumbnail: string;
}

export interface ProductWithCategory extends Product {
  category?: Category;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Animal 1",
    price: 100,
    categoryId: "1",
    slug: "animal-1",
    thumbnail: "https://placeimg.com/320/240/animals",
  },
  {
    id: "2",
    name: "Animal 2",
    price: 200,
    categoryId: "1",
    slug: "animal-2",
    thumbnail: "https://placeimg.com/320/240/animals",
  },
  {
    id: "3",
    name: "Animal 3",
    price: 300,
    categoryId: "1",
    slug: "animal-3",
    thumbnail: "https://placeimg.com/320/240/animals",
  },
  {
    id: "4",
    name: "Arch 1",
    price: 100,
    categoryId: "2",
    slug: "arch-1",
    thumbnail: "https://placeimg.com/320/240/arch",
  },
  {
    id: "5",
    name: "Arch 2",
    price: 200,
    categoryId: "2",
    slug: "arch-2",
    thumbnail: "https://placeimg.com/320/240/arch",
  },
  {
    id: "6",
    name: "Arch 3",
    price: 300,
    categoryId: "2",
    slug: "arch-3",
    thumbnail: "https://placeimg.com/320/240/arch",
  },
  {
    id: "7",
    name: "Nature 1",
    price: 100,
    categoryId: "3",
    slug: "nature-1",
    thumbnail: "https://placeimg.com/320/240/nature",
  },
  {
    id: "8",
    name: "Nature 2",
    price: 200,
    categoryId: "3",
    slug: "nature-2",
    thumbnail: "https://placeimg.com/320/240/nature",
  },
  {
    id: "9",
    name: "Nature 3",
    price: 300,
    categoryId: "3",
    slug: "nature-3",
    thumbnail: "https://placeimg.com/320/240/nature",
  },
  {
    id: "10",
    name: "People 1",
    price: 100,
    categoryId: "4",
    slug: "people-1",
    thumbnail: "https://placeimg.com/320/240/people",
  },
  {
    id: "11",
    name: "People 2",
    price: 200,
    categoryId: "4",
    slug: "people-2",
    thumbnail: "https://placeimg.com/320/240/people",
  },
  {
    id: "12",
    name: "People 3",
    price: 300,
    categoryId: "4",
    slug: "people-3",
    thumbnail: "https://placeimg.com/320/240/people",
  },
  {
    id: "13",
    name: "Tech 1",
    price: 100,
    categoryId: "5",
    slug: "tech-1",
    thumbnail: "https://placeimg.com/320/240/tech",
  },
  {
    id: "14",
    name: "Tech 2",
    price: 200,
    categoryId: "5",
    slug: "tech-2",
    thumbnail: "https://placeimg.com/320/240/tech",
  },
  {
    id: "15",
    name: "Tech 3",
    price: 300,
    categoryId: "5",
    slug: "tech-3",
    thumbnail: "https://placeimg.com/320/240/tech",
  },
];

// handy method to shuffle an array using Fisher-Yates algorithm
const shuffle = (array: Product[]) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const products = (
  state: ProductState = initialState,
  action: AnyAction
): ProductState => {
  switch (action.type) {
    case INIT_PRODUCTS:
      return {
        ...state,
        products: shuffle(sampleProducts),
      };
    default:
      return state;
  }
};

// Selector
// export const selectSetting = (state: RootState) => state;

export default products;

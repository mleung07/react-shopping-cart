import { AnyAction } from "redux";
// import type { RootState } from "../store";

// actions
export const INIT_CATEGORIES = "INIT_CATEGORIES";

export interface Category {
  id: string;
  name: string;
  slug: string;
  thumbnail: string;
}

interface CategoryState {
  categories: Category[];
}

const initialState: CategoryState = {
  categories: [],
};

const sampleCategories: Category[] = [
  {
    id: "1",
    name: "Animal",
    slug: "animal",
    thumbnail: "https://placeimg.com/100/100/animals",
  },
  {
    id: "2",
    name: "Arch",
    slug: "arch",
    thumbnail: "https://placeimg.com/100/100/arch",
  },
  {
    id: "3",
    name: "Nature",
    slug: "nature",
    thumbnail: "https://placeimg.com/100/100/nature",
  },
  {
    id: "4",
    name: "People",
    slug: "people",
    thumbnail: "https://placeimg.com/100/100/people",
  },
  {
    id: "5",
    name: "Tech",
    slug: "tech",
    thumbnail: "https://placeimg.com/100/100/tech",
  },
];

const categories = (state: CategoryState = initialState, action: AnyAction) => {
  switch (action.type) {
    case INIT_CATEGORIES:
      return {
        ...state,
        categories: sampleCategories,
      };
    default:
      return state;
  }
};

// Selector
// export const selectSetting = (state: RootState) => state;

export default categories;

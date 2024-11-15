import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./redux/slices/productSlice";
import favoriteSlice from "./redux/slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    favorites: favoriteSlice,
  },
});

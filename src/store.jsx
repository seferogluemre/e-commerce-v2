import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./redux/slices/productSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

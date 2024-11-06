import { configureStore } from "react-redux";
import ProductSlice from "./redux/slices/productSlice";

export const store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});

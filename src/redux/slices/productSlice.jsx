import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("getProduct", async () => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products?skip=23&limit=169&delay=20`
    );
    return response.data.products;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const initialState = {
  products: [],
  detailProducts: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    // Detay Ürünlerinin Apı Durumu -----
  },
});

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;

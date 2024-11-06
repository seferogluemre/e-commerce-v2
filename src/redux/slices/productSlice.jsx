import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("getProduct", async () => {
  try {
    const response = await axios.get(``);
    console.log("Datalar geldi emree", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
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
      state.products = action.payload;
      state.loading = false;
    });
  },
});

export default productSlice.reducer;

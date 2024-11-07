import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("getProduct", async () => {
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=laptop`
    );
    console.log("Datalar geldi emree", response.data);
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const data = {
  products: [],
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState: data,
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
      state.loading = false;
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;

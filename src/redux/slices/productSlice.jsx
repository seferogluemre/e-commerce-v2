import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    

  },
});

export const { incremented, decremented } = counterSlice.actions;

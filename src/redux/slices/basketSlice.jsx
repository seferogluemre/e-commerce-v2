import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // Eğer ürün zaten sepette varsa, adedini artır
        existingItem.count += action.payload.count;
      } else {
        // Eğer ürün yoksa, sepete ekle
        state.items.push(action.payload);
        alert("Sepete Eklendi");
      }
      // Sepetteki ürünleri localStorage'a kaydet
      localStorage.setItem("basketItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      // Ürünü sepetten çıkar
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      // Güncellenen sepeti localStorage'a kaydet
      localStorage.setItem("basketItems", JSON.stringify(state.items));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemCount,
  decreaseItemCount,
  getTotalPrice,
} = basketSlice.actions;
export default basketSlice.reducer;

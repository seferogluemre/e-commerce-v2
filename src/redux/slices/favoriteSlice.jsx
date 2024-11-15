import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteProducts: [],
  length: 0,
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const findProduct = state.favoriteProducts.find((product) => {
        return product.id === action.payload.id;
      });
      if (!findProduct) {
        state.favoriteProducts.push(action.payload);
      } else {
        // Eğer ürün zaten favorilerdeyse, onu silmek yerine güncelleyebiliriz
        // Örneğin, ürünün bilgilerini güncelleyebilirsiniz
        state.favoriteProducts = state.favoriteProducts.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );
      }
      // Her durumda localStorage'ı güncelle
      localStorage.setItem(
        "favoriteProducts",
        JSON.stringify(state.favoriteProducts)
      );
    },
    removeFavorites: (state, action) => {
      state.favoriteProducts = state.favoriteProducts.filter((product) => {
        return product.id !== action.payload.id;
      });
      localStorage.setItem(
        "favoriteProducts",
        JSON.stringify(state.favoriteProducts)
      );
    },
    setFavoritesFromStorage: (state, action) => {
      return action.payload;
    },
  },
});

export const { addToFavorite, removeFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;

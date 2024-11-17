import { createSlice } from "@reduxjs/toolkit";
const getLocalCartData = () => {
  const cartData = localStorage.getItem("basketItems");

  // Eğer localStorage'da veri yoksa ya da 'undefined' saklandıysa boş dizi döndür
  if (cartData && cartData !== "undefined") {
    try {
      return JSON.parse(cartData);
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
      return [];
    }
  }

  return [];
};

const initialState = {
  items: getLocalCartData(),
  totalPrice: 0,
  cartLength: 0,
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
        existingItem.count += action.payload.count;
      } else {
        state.items.push(action.payload);
        confetti();
      }
      // Sepet verisini güncelle ve toplam fiyatı hesapla
      localStorage.setItem("basketItems", JSON.stringify(state.items));
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.count,
        0
      );
      state.cartLength = state.items.length;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("basketItems", JSON.stringify(state.items));
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.count,
        0
      );
      state.cartLength = state.items.length;
    },
    increaseItemCount: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.count += 1;
        localStorage.setItem("basketItems", JSON.stringify(state.items));
        state.totalPrice = state.items.reduce(
          (total, item) => total + item.price * item.count,
          0
        );
      }
    },
    decreaseItemCount: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        if (existingItem.count > 1) {
          existingItem.count -= 1;
        } else {
          // Eğer adet 1 ise, ürünü sepetten çıkar
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
        localStorage.setItem("basketItems", JSON.stringify(state.items));
        state.totalPrice = state.items.reduce(
          (total, item) => total + item.price * item.count,
          0
        );
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemCount,
  decreaseItemCount,
} = basketSlice.actions;
export default basketSlice.reducer;

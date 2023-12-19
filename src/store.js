import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./features/wishlist/wishlistSlice";
import cartSlice from "./features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    cart: cartSlice,
  },
});

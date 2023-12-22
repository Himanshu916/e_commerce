/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../services/supabase";

export const addItemToCartInServer = createAsyncThunk(
  "cart/addItemToCartInServer",
  async function (sendingCart) {
    const { data, error } = await supabase
      .from("carts")
      .update({ cart: sendingCart })
      .eq("userId", "8e96d8ed-e397-4af3-8b36-17d6a9f690ec")
      .select();

    if (error) throw new Error("Cant update cart in server");

    return data;
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addItemToCart(state, action) {
      state.cart.push(action.payload);
    },
    deleteItemFromCart(state, action) {
      const cartAfterDeletingItem = state.cart.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(cartAfterDeletingItem));
      return { ...state, cart: cartAfterDeletingItem };
    },
    increaseQuantityInCartItem(state, action) {
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload && item.quantity <= 10)
          return { ...item, quantity: item.quantity + 1 };
        return item;
      });
      return { ...state, cart: updatedCart };
    },
    decreaseQuantityInCartItem(state, action) {
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload && item.quantity >= 1)
          return { ...item, quantity: item.quantity - 1 };
        return item;
      });
      return { ...state, cart: updatedCart };
    },
    clearItemsFromCart(state, action) {
      //   return { state, action };
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(addItemToCartInServer.fulfilled, (state, action) => {
        state.itemAddedInServer = action.payload;
        state.status = "added";
      })
      .addCase(addItemToCartInServer.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addItemToCartInServer.rejected, (state, action) => {
        state.status = "rejected";
      }),
});
export const {
  addItemToCart,
  deleteItemFromCart,
  increaseQuantityInCartItem,
  decreaseQuantityInCartItem,
} = cartSlice.actions;
export default cartSlice.reducer;

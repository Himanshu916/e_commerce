import { createSlice } from "@reduxjs/toolkit";
// import { store } from "../../store";
// const initialState = {
//   cart: ["a", "b"],
// };
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItemToCart(state, action) {
      console.log(state.cart, action);
      state.cart.push(action.payload);
    },
    deleteItemFromCart(state, action) {
      const cartAfterDeletingItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cart: cartAfterDeletingItem };
    },
    increaseQuantityInCartItem(state, action) {
      console.log(state, action.payload);
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload && item.quantity <= 10)
          return { ...item, quantity: item.quantity + 1 };
        return item;
      });
      return { ...state, cart: updatedCart };
    },
    decreaseQuantityInCartItem(state, action) {
      console.log(state, action.payload);
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload && item.quantity >= 1)
          return { ...item, quantity: item.quantity - 1 };
        return item;
      });
      return { ...state, cart: updatedCart };
    },
    clearItemsFromCart(state, action) {
      console.log(state, action);

      //   return { state, action };
    },
  },
});
export const {
  addItemToCart,
  deleteItemFromCart,
  increaseQuantityInCartItem,
  decreaseQuantityInCartItem,
} = cartSlice.actions;
export default cartSlice.reducer;

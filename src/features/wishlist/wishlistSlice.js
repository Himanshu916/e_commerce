import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  wishlist: [],
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist(state, action) {
      state.wishlist.push(action.payload);
    },
    deleteItemFromWishList(state, action) {
      const wishlistAfterDeletingItem = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, wishlist: wishlistAfterDeletingItem };
    },

    clearItemsFromWishlist(state, action) {
      console.log(state, action);

      //   return { state, action };
    },
  },
});

export const {
  addItemToWishlist,
  deleteItemFromWishList,
  clearItemsFromWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;

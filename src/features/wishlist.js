import { createSlice } from "@reduxjs/toolkit";

export const wishlistSplice = createSlice({
	name: "wishlist",
	initialState: {
		value: [],
	},
	reducers: {
		addToWishList: (state, action) => {
			if (state.value.some((item) => item.id === action.payload.id)) return;
			state.value.push(action.payload);
		},
		removeFromWishList: (state, action) => {
			state.value = [...JSON.parse(JSON.stringify(state.value))].filter(
				(item) => item.id !== action.payload.id
			);
		},
	},
});

export const { addToWishList, removeFromWishList } = wishlistSplice.actions;
export default wishlistSplice.reducer;

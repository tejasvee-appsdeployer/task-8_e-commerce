import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		value: [],
	},
	reducers: {
		addToCart: (state, action) => {
			if (state.value.some((item) => item.id === action.payload.id)) return;
			state.value.push(action.payload);
		},
		removeFromCart: (state, action) => {
			state.value = [...JSON.parse(JSON.stringify(state.value))].filter(
				(item) => item.id !== action.payload.id
			);
			console.log(state.value);
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

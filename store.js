import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/basketSlice";
import restaurantReducer from "./slices/restauranSlice";

export const store = configureStore({
	reducer: {
		basket: basketReducer,
		restaurant: restaurantReducer,
	},
});

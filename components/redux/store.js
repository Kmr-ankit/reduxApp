import { configureStore } from "@reduxjs/toolkit";
import favReducer from "./fav";
export const Store = configureStore({
  reducer: {
    favMeals: favReducer,
  },
});

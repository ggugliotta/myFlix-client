import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/movies";
import usersReducer from "./reducers/user";

export const store = configureStore({
  reducer: { movies: moviesReducer, userReducer },
});

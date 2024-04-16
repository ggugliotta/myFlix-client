import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/movies";
import usersReducer from "./reducers/users";

export const store = configureStore({
  reducer: { movies: moviesReducer, usersReducer },
});

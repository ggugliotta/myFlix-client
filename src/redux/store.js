import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/books";
import usersReducer from "./reducers/users";


export const store = configureStore({
    reducer: {movies: moviesReducer, usersReducer }
});
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/books";


export const store = configureStore({
    reducer: {movies: moviesReducer }
});
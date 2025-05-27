import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: recipe }) => {
      const existingIndex = state.findIndex((r) => r.id === recipe.id);
      if (existingIndex === -1) {
        state.push(recipe);
      } else {
        state.splice(existingIndex, 1);
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;

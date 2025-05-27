import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./user.actions";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    error: null,
    user: {},
  },
  reducers: {},
  extraReducers: {
    [getUserById.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUserById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [getUserById.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
      state.user = {}
    },
  },
});

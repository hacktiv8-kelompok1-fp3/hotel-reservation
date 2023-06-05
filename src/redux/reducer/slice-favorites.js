import { createSlice } from "@reduxjs/toolkit";

const sliceFavorites = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorites: (state, action) => {
      const saveHotel = state.favorites.find(
        (item) => item.hotel_id === action.payload.hotel_id
      );
      if (!saveHotel) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorites: (state, action) => {
      const removeHotel = state.favorites.filter(
        (item) => item.hotel_id !== action.payload
      );
      state.favorites = removeHotel;
    },
  },
});

export const { addFavorites, removeFavorites } = sliceFavorites.actions;
export default sliceFavorites.reducer;

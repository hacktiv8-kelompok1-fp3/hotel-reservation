import { createSlice } from "@reduxjs/toolkit";

export const sliceHistory = createSlice({
  name: "historycheckout",
  initialState: {
    history: [],
  },
  reducers: {
    addHistoryCheckout: (state, action) => {
      const checkIdhHotel = state.history.find(
        (item) => item.hotel.hotel_id === action.payload.hotel.hotel_id
      );
      if (!checkIdhHotel) {
        state.history.push(action.payload);
      }
    },
    deleteHistoryCheckout: (state, action) => {
      const removeHistory = state.history.filter(
        (item) => item.hotel.hotel_id !== action.payload
      );
      state.history = removeHistory;
    },
  },
});

export const { addHistoryCheckout, deleteHistoryCheckout } =
  sliceHistory.actions;
export default sliceHistory.reducer;

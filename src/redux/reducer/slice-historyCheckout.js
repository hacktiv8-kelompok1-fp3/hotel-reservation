import { createSlice } from "@reduxjs/toolkit";

export const sliceHistory = createSlice({
  name: "historycheckout",
  initialState: {
    history: [],
  },
  reducers: {
    addHistoryCheckout: (state, action) => {
      const checkIdhHotel = state.history.find(
        (item) => item.id === action.payload.id
      );
      if (!checkIdhHotel) {
        state.history.push(action.payload);
      }
    },
  },
});

export const { addHistoryCheckout } = sliceHistory.actions;
export default sliceHistory.reducer;

import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const sliceBookingData = createSlice({
  name: "bookingdata",
  initialState: {
    detailhotel: {},
    checkin: "",
    checkout: "",
    adults: 0,
    children: 0,
    room: 0,
    numDays: null,
    totalBooking: null,
  },
  reducers: {
    addDetailHotel: (state, action) => {
      state.detailhotel = action.payload;
      state.totalBooking = action.payload.price;
    },
    addBookingDate: (state, action) => {
      const startDate = action.payload.startDate;
      const endDate = action.payload.endDate;
      if (startDate && endDate) {
        const difftime = Math.abs(endDate - startDate);
        const diffdays = Math.ceil(difftime / (1000 * 60 * 60 * 24));
        state.numDays = diffdays;
        state.checkin = moment(startDate).format("LL");
        state.checkout = moment(endDate).format("LL");
        if (state.totalBooking !== null) {
          const total = state.totalBooking * state.numDays;
          state.totalBooking = total;
        }
      }
    },
    handleAdd: (state, action) => {
      if (action.payload.type === "adults") {
        state.adults++;
      }
      if (action.payload.type === "children") {
        state.children++;
      }
      if (action.payload.type === "room") {
        state.room++;
      }
    },
  },
});

export const { addDetailHotel, addBookingDate, handleAdd } =
  sliceBookingData.actions;
export default sliceBookingData.reducer;

import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const sliceBookingData = createSlice({
  name: "bookingdata",
  initialState: {
    detailhotel: {},
    contactInformation: {},
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
      state.totalBooking = action.payload.min_total_price;
    },
    addContactInformation: (state, action) => {
      const item = action.payload;
      if (item.fullName !== "" || item.phoneNumber !== "") {
        state.contactInformation = item;
      }
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
    deleteDate: (state, action) => {
      state.checkin = "";
      state.checkout = "";
      state.totalBooking = action.payload.min_total_price;
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
    handleDelete: (state, action) => {
      if (action.payload.type === "adults") {
        state.adults--;
      }
      if (action.payload.type === "children") {
        state.children--;
      }
      if (action.payload.type === "room") {
        state.room--;
      }
    },
    clearBooking: (state) => {
      state.detailhotel = {};
      state.contactInformation = {};
      state.checkin = "";
      state.checkout = "";
      state.adults = 0;
      state.children = 0;
      state.room = 0;
      state.numDays = null;
      state.totalBooking = null;
    },
  },
});

export const {
  addDetailHotel,
  addBookingDate,
  addContactInformation,
  handleAdd,
  handleDelete,
  clearBooking,
  deleteDate,
} = sliceBookingData.actions;
export default sliceBookingData.reducer;

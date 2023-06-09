import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const sliceSearch = createSlice({
  name: "search",
  initialState: {
    dateRangeItem: "",
    checkin: "",
    checkout: "",
    adult: 1,
    children: 0,
    room: 1,
    location: -2679652,
  },
  reducers: {
    getSearch: (state, action) => {
      const startDate = moment(action.payload.startDate).format("YYYY-MM-DD");
      const endDate = moment(action.payload.endDate).format("YYYY-MM-DD");
      state.checkin = startDate;
      state.checkout = endDate;
      state.dateRangeItem = `${startDate} - ${endDate}`;
    },
    getGuess: (state, action) => {
      state.location = action.payload.location;
    },
    handleAddSearch: (state, action) => {
      if (action.payload.type === "adults") {
        state.adult++;
      }
      if (action.payload.type === "children") {
        state.children++;
      }
      if (action.payload.type === "room") {
        state.room++;
      }
    },
    handleDeleteSearch: (state, action) => {
      if (action.payload.type === "adults") {
        state.adult--;
      }
      if (action.payload.type === "children") {
        state.children--;
      }
      if (action.payload.type === "room") {
        state.room--;
      }
    },
    getClearSearch: (state) => {
      state.adult = 1;
      state.children = 0;
      state.room = 1;
      state.location = -2679652;
    },
  },
});

export const {
  getSearch,
  getGuess,
  getClearSearch,
  getDataSearch,
  handleAddSearch,
  handleDeleteSearch,
} = sliceSearch.actions;
export default sliceSearch.reducer;

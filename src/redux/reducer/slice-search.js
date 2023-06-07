import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const sliceSearch = createSlice({
  name: "search",
  initialState: {
    dateRangeItem: "",
    checkin: "",
    checkout: "",
    adult: "1",
    children: "1",
    room: "1",
    data: [],
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
      state.adult = action.payload.adult;
      state.children = action.payload.children;
      state.room = action.payload.room;
    },
    getDataSearch: (state, action) => {
      state.data = action.payload;
    },
    getClearSearch: (state) => {
      state.checkin = "";
      state.checkout = "";
      state.adult = "";
      state.children = "";
      state.room = "";
    },
  },
});

export const { getSearch, getGuess, getClearSearch, getDataSearch } =
  sliceSearch.actions;
export default sliceSearch.reducer;

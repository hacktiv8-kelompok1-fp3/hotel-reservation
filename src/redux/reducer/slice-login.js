import { createSlice } from "@reduxjs/toolkit";

export const sliceLoginUser = createSlice({
  name: "authorization",
  initialState: {
    token: "",
  },
  reducers: {
    addUsers: (state, action) => {
      const item = action.payload;
      state.token = item;
      console.log(item);
      // if (item.email !== "") {
      //   const parse = JSON.stringify(item);
      //   state.token = btoa(parse);
      // }
    },
  },
});

export const { addUsers } = sliceLoginUser.actions;
export default sliceLoginUser.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { Base64 } from "js-base64";

export const sliceLoginUser = createSlice({
  name: "authorization",
  initialState: {
    token: "",
  },
  reducers: {
    addUsers: (state, action) => {
      const item = action.payload;
      console.log(item);
      // console.log(item);
      if (item.username !== "") {
        state.token = item.username;
        // state.token = Base64.encode(item);
      }
    },
  },
});

export const { addUsers } = sliceLoginUser.actions;
export default sliceLoginUser.reducer;

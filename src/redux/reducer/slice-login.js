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
      const parse = Base64.encode(JSON.stringify(item));
      if (item.username !== "" && item.email !== "" && item.password !== "") {
        state.token = parse;
      }
    },
    removeUsers: (state) => {
      state.token = "";
    },
  },
});

export const { addUsers, removeUsers } = sliceLoginUser.actions;
export default sliceLoginUser.reducer;

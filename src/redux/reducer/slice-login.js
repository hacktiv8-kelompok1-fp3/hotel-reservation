import { createSlice } from "@reduxjs/toolkit";

export const sliceLoginUser = createSlice({
  name: "authorization",
  initialState: {
    name: "",
    email: "",
    password: "",
  },
  reducers: {
    addUsers: (state, action) => {
      const item = action.payload;
      state.name = item.name;
      state.email = item.email;
      state.password = btoa(item.password);
    },
  },
});

export const { addUsers } = sliceLoginUser.actions;
export default sliceLoginUser.reducer;

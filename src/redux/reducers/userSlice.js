import { createSlice, createAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoad: false,
    isAuth: true,
    oneUser: null,
  },
  reducers: {
    getUserSuccess: (state) => {
      state.isLoad = true;
    },
    getUsers: (state, action) => {
      state.isLoad = false;
      state.users = action.payload;
    },
    increment: (state) => {
      state.count += 1;
    },
    findUser: (state, action) => {
      state.oneUser = state.users.find(
        (user) => user.id === action.payload
      );
    },
  },
});
export const saveUser = createAction("saveUser");
export const { getUsers, increment, getUserSuccess, findUser } =
  userSlice.actions;
export default userSlice.reducer;

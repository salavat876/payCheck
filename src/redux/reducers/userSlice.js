import { createSlice, createAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoad: false,
    isAuth: false,
    oneUser: null,
    login: "paycheck@gmail.com",
    password: "1234321",
  },
  reducers: {
    setAuth: (state) => {
      state.isAuth = true;
    },
    getUserSuccess: (state) => {
      state.isLoad = true;
    },
    getUsers: (state, action) => {
      state.isLoad = false;
      state.users = action.payload;
    },
    deletedUser: (state, action) => {
      state.users.filter((user) => user.id !== user.id);
    },
    increment: (state) => {
      state.count += 1;
    },
  },
});
export const saveUser = createAction("saveUser");
export const { getUsers, increment, getUserSuccess, setAuth, deletedUser } =
  userSlice.actions;
export default userSlice.reducer;

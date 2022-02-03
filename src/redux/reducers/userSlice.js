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
  },
});
export const saveUserAsync = createAction(
  "saveUserAsync",
  function prepare(user) {
    return {
      payload: {
        user,
      },
    };
  }
);
export const saveUserSuccess = createAction(
  "saveUserSuccess",
  function prepare(user) {
    return {
      payload: {
        user,
      },
    };
  }
);
export const deletedUserAsync = createAction("deletedUserAsync");
export const { getUsers, increment, getUserSuccess, setAuth, deletedUser } =
  userSlice.actions;
export default userSlice.reducer;

import { put, call, takeEvery } from "redux-saga/effects";
import {
  deletedUser,
  deletedUserAsync,
  getUsers,
  saveUserAsync,
  saveUserSuccess,
} from "../reducers/userSlice.js";
import axios from "axios";

function* getUsersWorker() {
  const users = yield call(() =>
    axios.get("https://61f0031c732d93001778e7ca.mockapi.io/pay/users")
  );
  const formattedUsers = yield users.data;
  yield put(getUsers(formattedUsers));
}
function* saveUserWorker(args) {
  const { payload } = args;
  const newUser = yield call(() =>
    axios.put(
      `https://61f0031c732d93001778e7ca.mockapi.io/pay/users/${payload.user.id}`,
      {
        name: payload.user.userName,
        sum: payload.user.userSum,
      }
    )
  );
  const data = yield newUser.data;
  yield put(saveUserAsync(data));
}
function* deleteUserWorker(action) {
  const { payload } = action;
  yield call(() =>
    axios
      .delete(
        `https://61f0031c732d93001778e7ca.mockapi.io/pay/users/${payload}`
      )
      .then((res) => console.log(res))
  );
  yield put(deletedUserAsync());
}
function* userSaga() {
  yield takeEvery("users/getUserSuccess", getUsersWorker);
  yield takeEvery("saveUserSuccess", saveUserWorker);
  yield takeEvery("users/deletedUser", deleteUserWorker);
}
export default userSaga;

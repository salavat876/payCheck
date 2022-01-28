import { put, call, takeEvery } from "redux-saga/effects";
import { getUsers } from "../reducers/userSlice.js";
import axios from "axios";

function* getUsersWorker() {
  const users = yield call(() =>
    axios.get("https://61f0031c732d93001778e7ca.mockapi.io/pay/users")
  );
  const formattedUsers = yield users.data;
  yield put(getUsers(formattedUsers));
}
function* userSaga() {
  yield takeEvery("users/getUserSuccess", getUsersWorker);
}
export default userSaga;

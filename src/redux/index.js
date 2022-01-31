import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger/src";
import userSlice from "./reducers/userSlice";
import userSaga from "./saga/userSaga";

const saga = createSagaMiddleware();

const rootReducer = combineReducers({
  users: userSlice,
});
//TO-DO redux-persist
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [saga, logger],
});

saga.run(userSaga);

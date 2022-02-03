import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger/src";
import userSlice from "./reducers/userSlice";
import userSaga from "./saga/userSaga";

const saga = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  users: userSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [saga, logger],
});

export const persistor = persistStore(store);

saga.run(userSaga);

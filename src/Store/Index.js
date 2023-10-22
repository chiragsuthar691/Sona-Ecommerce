import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jewels from "../Store/Reducers/JewelsSlice";

const reducers = combineReducers({
  jewels,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

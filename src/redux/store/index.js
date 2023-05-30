import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookingDataReducers from "../reducer/slice-bookingData";
import favoritesReducers from "../reducer/slice-favorites";
import { hotelsApi } from "../reducer/slice-hotel";

const rootReducers = combineReducers({
  bookingData: bookingDataReducers,
  favorite: favoritesReducers,
  [hotelsApi.reducerPath]: hotelsApi.reducer,
});

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      hotelsApi.middleware
    ),
});

export default store;

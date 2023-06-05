import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import bookingDataReducers from "../reducer/slice-bookingData";
import favoritesReducers from "../reducer/slice-favorites";
import { hotelsApi } from "../reducer/slice-hotel";
import historyCheckoutReducers from "../reducer/slice-historyCheckout";
import AuthorizationReducers from "../reducer/slice-login";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
};

const rootReducers = combineReducers({
  bookingData: bookingDataReducers,
  favorite: favoritesReducers,
  historycheckout: historyCheckoutReducers,
  authorization: AuthorizationReducers,
  [hotelsApi.reducerPath]: hotelsApi.reducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducers,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(hotelsApi.middleware),
});

export default store;

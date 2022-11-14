import { configureStore } from "@reduxjs/toolkit";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import ExpoFileSystemStorage from "redux-persist-expo-filesystem"
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import TokenSlice from "./Features/Feature_1_GetToken/GetToken";
import loginSlice from "./Features/Feature_2_authentification/Login/Slice";

const reducers = combineReducers({
  token: TokenSlice,
  auth: loginSlice,

});

const persistConfig = {
  key: "root",
  storage: ExpoFileSystemStorage,
  whitelist: [
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;



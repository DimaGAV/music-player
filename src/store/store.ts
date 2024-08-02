import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { playlistReducer } from "./features/playlistSlice";
import { userReducer } from "./features/userSlice";
import { authReducer } from "./features/authSlice";

export const makeStore = () => {
  return configureStore({
    reducer: combineReducers({
      playlist: playlistReducer,
      user: userReducer,
      auth: authReducer,
    }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

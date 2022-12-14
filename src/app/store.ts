import { configureStore } from "@reduxjs/toolkit";
import { playerSlice, taskSlice } from "../taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    players: playerSlice.reducer,
  },
  devTools: process.env.REACT_APP_ENV === "DEVELOPMENT",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

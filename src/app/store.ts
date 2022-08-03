import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "../taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
  },
  devTools: process.env.REACT_APP_ENV === "DEVELOPMENT",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

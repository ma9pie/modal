/* @/redux/store.ts */

import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/redux/modal";

export const store = configureStore({
  reducer: { modal: modalReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// @ts-ignore
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

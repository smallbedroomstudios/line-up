import { configureStore } from "@reduxjs/toolkit";
import ticketCounterReducer from "../features/ticketCounter/slice";

export const store = configureStore({
  reducer: {
    ticketCounter: ticketCounterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

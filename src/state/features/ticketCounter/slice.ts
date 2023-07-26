import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TicketCounterState {
  [key: string]: {
    value: number;
  };
}

export interface TicketCounterActionPayload {
  name: string;
}

export interface InitTicketCounterActionPayload {
  name: string;
  description: string;
  type: string;
  price: number;
  adjusters: {
    price: number;
    name: string;
  }[];
}

const initialState: TicketCounterState = {};

export const ticketCounterSlice = createSlice({
  name: "ticket-counter",
  initialState,
  reducers: {
    // initial state with tickets that have loaded from the api
    init: (state, action: PayloadAction<InitTicketCounterActionPayload[]>) => {
      action.payload.map((action) => {
        state[action.name] = {
          value: 0,
        };
      });
    },
    increment: (state, action: PayloadAction<TicketCounterActionPayload>) => {
      state[action.payload.name].value += 1;
    },
    decrement: (state, action: PayloadAction<TicketCounterActionPayload>) => {
      state[action.payload.name].value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, init } = ticketCounterSlice.actions;

export default ticketCounterSlice.reducer;

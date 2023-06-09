/* @/redux/modal.ts */

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import { ModalProps } from "@/types";

const initialState: ModalProps[] = [];

const modalReducer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setState(state, action) {
      return action.payload;
    },
  },
});

export const modalActions = { ...modalReducer.actions };
export const selecModal = (state: RootState) => state.modal;
export default modalReducer.reducer;

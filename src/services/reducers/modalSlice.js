import { createSlice } from "@reduxjs/toolkit";
import { sendCode } from "./authSlice";

export const ModalViewEnum = Object.freeze({
  LOGIN: "LOGIN",
  VERIFY: "VERIFY",
});

const initialState = {
  isModalOpen: false,
  modalView: ModalViewEnum.LOGIN,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendCode.fulfilled, (state) => {
      state.modalView = ModalViewEnum.VERIFY;
    });
  },
});

export const { closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;

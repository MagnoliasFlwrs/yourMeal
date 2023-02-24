
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
    },
    reducers: {
        openModal: state => {
            state.isOpen = true;
        },
        closeModal: state => {
            state.isOpen =false;
        }
    }
})

export const {openModal , closeModal} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

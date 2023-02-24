import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { closeModal } from "../modalDelivery/modalDeliverySlice";
import { clearOrder } from "../order/orderSlice";

const initialState ={
    name : '',
    tel : '',
    format : 'delivery',
    address : '',
    floor : '',
    intercom : '',
    error: '',

}
export const submitForm = createAsyncThunk('form/submit' , async (data, { dispatch , rejectWithValue }) => {
    try {
        const res = await fetch(
            'https://cloudy-slash-rubidium.glitch.me/api/order' ,
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }
        );
        if (!res.ok) {
            throw new Error(`err: ${res.statusText}`)
        }
        dispatch(clearOrder());
        dispatch(closeModal());

        return await res.json();
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateFormValue : (state, action) => {
            state[action.payload.field] = action.payload.value
        }
    },
    extraReducers : builder => {
        builder
        .addCase(submitForm.pending , (state) => {
            state.error = '';
        })
        .addCase(submitForm.fulfilled, (state,action) => {
            state.error = '';
            state.response = action.payload;
        })
        .addCase(submitForm.rejected, (state,action) => {
            state.error = action.payload.error;
        })

    }
})


export const { updateFormValue } = formSlice.actions;
export const formReducer = formSlice.reducer;
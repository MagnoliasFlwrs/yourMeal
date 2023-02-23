import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API_URI, POSTFIX } from "../../const"

const initialState = {
    products: [],
    error: '',
}
export const productReqAsync = createAsyncThunk(
    'product/fetch' , (category) =>
        fetch(`${API_URI}${POSTFIX}?category=${category}`)
            .then(req => req.json())
            .catch(error => error.message)
        )
const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(productReqAsync.pending , state => {
            state.error='';
        })
        .addCase(productReqAsync.fulfilled , (state, action) => {
            state.error='';
            state.products = action.payload;
        })
        .addCase(productReqAsync.rejected , (state, action) => {
            state.error=action.payload.error;
        })
    }
})

export const productReducer = productSlice.reducer;
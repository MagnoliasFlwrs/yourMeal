import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {categoryReducer} from './category/categorySlice'
import {  orderReducer } from './order/orderSlice'
import { productReducer } from './product/productSlice'

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        order: orderReducer,
    },
    // middleware: getDefaultMiddleware => {
    //     const mdwrs = getDefaultMiddleware().concat(localStorageMiddleware);
    //     return mdwrs
    // }
})
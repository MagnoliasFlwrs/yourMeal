import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {categoryReducer} from './category/categorySlice'
import { formReducer } from './form/formSlice'
import { modalReducer } from './modalDelivery/modalDeliverySlice'
import {  orderReducer } from './order/orderSlice'
import { productReducer } from './product/productSlice'

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        order: orderReducer,
        modal: modalReducer,
        form: formReducer,
    },
    // middleware: getDefaultMiddleware => {
    //     const mdwrs = getDefaultMiddleware().concat(localStorageMiddleware);
    //     return mdwrs
    // }
})
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import cartReducer from './../features/cartSlice'
import reviewReducer from "./../features/reviewSlice"

const rootReducer = combineReducers({
    cart: cartReducer,
    reviews: reviewReducer
})

export const store = configureStore({
    reducer:{
        reducer:rootReducer
    }
})

// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartReducer';
// import additionalReducer from './additionalReducer';

// const rootReducer = combineReducers({
//   cart: cartReducer,
//   additional: additionalReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });
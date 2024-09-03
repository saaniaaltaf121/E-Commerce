import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';

// Create the Redux store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
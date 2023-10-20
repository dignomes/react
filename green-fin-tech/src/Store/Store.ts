import { configureStore } from '@reduxjs/toolkit';
import swipingReducer from './SwipingSlice';
import cartReducer from './CartSlice';

const Store = configureStore({
  reducer: {
    swiping: swipingReducer,
    cart: cartReducer
  }
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;

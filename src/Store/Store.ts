import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
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

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default Store;

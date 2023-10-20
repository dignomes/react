import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from './../types'

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
    items: [
      {
        ticker: 'AAPL',
        totalSum: 1000,
        amountOfStocks: 44,
        proportion: 44,
        isSelected: true
      },
      {
        ticker: 'XOM',
        totalSum: 100,
        amountOfStocks: 43,
        proportion: 56,
        isSelected: true
      },
    ]
  };
  

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.ticker !== action.payload);
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

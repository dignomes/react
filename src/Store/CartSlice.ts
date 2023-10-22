import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from './../types'

type CartState = {
  items: CartItem[];
};

const savedCartData = localStorage.getItem('cartState');

const parsedCartData: CartState | null = savedCartData ? JSON.parse(savedCartData) : null;

const initialState: CartState = parsedCartData || {
  items: []
  };
  
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(el => el.ticker == action.payload.ticker);
      if(!existingItem) {
        state.items.push(action.payload);
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.ticker !== action.payload);

      const portfolioSum = state.items.reduce((sum, item) => sum + item.totalSum, 0);
      state.items = state.items.map(item => ({ ...item, proportion: item.totalSum / portfolioSum * 100 }));
    },

    setSum: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(el => el.ticker == action.payload.ticker)
      if(item) {
        item.amountOfStocks = action.payload.totalSum / item.price;
        item.totalSum = action.payload.totalSum;

        const portfolioSum = state.items.reduce((sum, item) => sum + item.totalSum, 0);
        state.items = state.items.map(item => ({ ...item, proportion: item.totalSum / portfolioSum * 100 }));
      }
    },

    setAmount: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(el => el.ticker == action.payload.ticker)
      if(item) {
        item.totalSum = action.payload.amountOfStocks * item.price;
        item.amountOfStocks = action.payload.amountOfStocks;
        
        const portfolioSum = state.items.reduce((sum, item) => sum + item.totalSum, 0);
        state.items = state.items.map(item => ({ ...item, proportion: item.totalSum / portfolioSum * 100 }));
      }
    },

    setProportion: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(el => el.ticker == action.payload.ticker)
      if(item) {
        item.proportion = action.payload.proportion;
      }
    }
  }
});

export const { addItem, removeItem, setSum, setAmount, setProportion } = cartSlice.actions;
export default cartSlice.reducer;

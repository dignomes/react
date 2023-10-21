import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from './../types'

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
    items: [
      {
        ticker: 'AAPL',
        totalSum: 10,
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
      {
        ticker: 'NEE',
        totalSum: 43,
        amountOfStocks: 5,
        proportion: 12,
        isSelected: true
      },
      {
        ticker: 'TSLA',
        totalSum: 10,
        amountOfStocks: 30,
        proportion: 40,
        isSelected: true
      },
      {
        ticker: 'WTS',
        totalSum: 50,
        amountOfStocks: 60,
        proportion: 70,
        isSelected: true
      },
      {
        ticker: 'HASI',
        totalSum: 20,
        amountOfStocks: 30,
        proportion: 40,
        isSelected: true
      },
    ]
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
    },

    setSum: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(el => el.ticker == action.payload.ticker)
      if(item) {
        item.totalSum = action.payload.totalSum;
      }
    },

    setAmount: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(el => el.ticker == action.payload.ticker)
      if(item) {
        item.amountOfStocks = action.payload.amountOfStocks;
      }
    },

    setProportion: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(el => el.ticker == action.payload.ticker)
      if(item) {
        item.proportion = action.payload.proportion;
      }
    },

    selectStock: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(el => el.ticker == action.payload.ticker)
      if(item) {
        item.isSelected = action.payload.isSelected;
      }
    }
  }
});

export const { addItem, removeItem, setSum, setAmount, setProportion, selectStock } = cartSlice.actions;
export default cartSlice.reducer;

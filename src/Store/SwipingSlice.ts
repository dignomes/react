import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dislikeStock, getStock, getStocks, likeStock } from '../API/SwipeAPI';
import { Stock } from '../types';

type SwipingState = {
  index: number,
  stocks: Stock[],
  currentStock?: Stock
  // Define the state shape here
};

const initialState: SwipingState = {
  index: 0,
  stocks: [
        {
          id: 6,
          stock: "stock.Reaction.None",
          title: "Andes - Crunchbase Investor Profile & Investments",
          description: "Andes develops an integrated microbial technology to help accelerate crop growth.",
          tags: "['agriculture', 'agtech', 'biotechnology', 'greentech', 'sustainability-e391']",
          image_url: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/u7utfet2oqdglu5mjrge.jpg",
          ticker_symbol: 'AND'
        }
    ],
  currentStock: {
          id: 6,
          stock: "stock.Reaction.None",
          title: "Andes - Crunchbase Investor Profile & Investments",
          description: "Andes develops an integrated microbial technology to help accelerate crop growth.",
          tags: "['agriculture', 'agtech', 'biotechnology', 'greentech', 'sustainability-e391']",
          image_url: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/u7utfet2oqdglu5mjrge.jpg",
          ticker_symbol: 'AND'
        }
};

export const getSomeStocks = createAsyncThunk(
  'stocks/getStocks',
  async () => {
    const response = await getStocks();
    return response;
  }
);


export const loadStocks = createAsyncThunk(
  'stocks/loadStocks',
  async () => {
    const response = await getStocks();
    return response;
  }
);

export const getSingleStock = createAsyncThunk(
  'stocks/getSingleStock',
  async () => {
    const response = await getStock();
    return response;
  }
);

export const sendStockLike = createAsyncThunk(
  'stocks/sendStockLike',
  async (id: number) => {
    const response = await likeStock(id);
    return response;
  }
);

export const sendStockDislike = createAsyncThunk(
  'stocks/sendStockDislike',
  async (id: number) => {
    const response = await dislikeStock(id);
    return response;
  }
);

export const swipingSlice = createSlice({
  name: 'swiping',
  initialState,
  reducers: {
    // For example:
    setSwiping: (state, action: PayloadAction<number>) => {
      // Handle the action here
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.stocks = state.stocks.filter(item => item.ticker_symbol !== action.payload);
      state.currentStock = state.stocks.length ? state.stocks[0] : undefined;
    },
    setCurrent: (state, action: PayloadAction<string>) => {
        state.currentStock = state.stocks.find(item => item.ticker_symbol == action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getSomeStocks.fulfilled, (state, action) => {
      state.stocks = action.payload;  // Assuming the API returns an array of items directly.
      state.currentStock = action.payload.length ? action.payload[0] : undefined;
    }).addCase(loadStocks.fulfilled, (state, action) => {
        if(state.stocks.length <= 3) {
            state.stocks = state.stocks.concat(action.payload);
        }
    });
  }
});

export const { setSwiping, removeItem, setCurrent } = swipingSlice.actions;
export default swipingSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dislikeStock, getStock, getStocks, likeStock } from '../API/SwipeAPI';
import { Stock } from '../types';

type SwipingState = {
  index: number,
  stocks: Stock[],
  // Define the state shape here
};

const initialState: SwipingState = {
  index: 0,
  stocks: [],
};

export const getSomeStocks = createAsyncThunk(
  'stocks/getStocks',
  async () => {
    const response = await getStocks();
    return response;
  }
);

export const getSingleStock = createAsyncThunk(
  'stocks/getStock',
  async () => {
    const response = await getStock();
    return response;
  }
);

export const sendStockLike = createAsyncThunk(
  'stocks/getStocks',
  async (ticker: string) => {
    const response = await likeStock(ticker);
    return response;
  }
);

export const sendStockDislike = createAsyncThunk(
  'stocks/getStocks',
  async (ticker: string) => {
    const response = await dislikeStock(ticker);
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
      state.stocks = state.stocks.filter(item => item.ticker !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getSomeStocks.fulfilled, (state, action) => {
      state.stocks = action.payload;  // Assuming the API returns an array of items directly.
    });
  }
});

export const { setSwiping, removeItem } = swipingSlice.actions;
export default swipingSlice.reducer;

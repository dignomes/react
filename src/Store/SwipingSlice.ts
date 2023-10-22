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
  stocks: [],
  currentStock: undefined
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
  async (data : {id: number, load_data: any}) => {
    const response = await likeStock(data.id, data.load_data);
    return response;
  }
);

export const sendStockDislike = createAsyncThunk(
  'stocks/sendStockDislike',
  async (data : {id: number, load_data: any}) => {
    const response = await dislikeStock(data.id, data.load_data);
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
    removeItem: (state, action: PayloadAction<number>) => {
      state.stocks = state.stocks.filter(item => item.id !== action.payload);
      state.currentStock = state.stocks.length ? state.stocks[0] : undefined;
    },
    setCurrent: (state, action: PayloadAction<number>) => {
        state.currentStock = state.stocks.find(item => item.id == action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getSomeStocks.fulfilled, (state, action) => {
      state.stocks = action.payload;  // Assuming the API returns an array of items directly.
      state.currentStock = action.payload.length ? action.payload[0] : undefined;
    }).addCase(sendStockLike.fulfilled, (state, action) => {
      // @ts-ignore
      state.stocks = state.stocks.filter(item => item.id !== state.currentStock.id);
      state.currentStock = state.stocks.length ? state.stocks[0] : undefined;
      if(action.payload){
          state.stocks = state.stocks.concat(action.payload);
      }
    }).addCase(sendStockDislike.fulfilled, (state, action) => {
      // @ts-ignore
      state.stocks = state.stocks.filter(item => item.id !== state.currentStock.id);
      state.currentStock = state.stocks.length ? state.stocks[0] : undefined;
      if(action.payload){
          state.stocks = state.stocks.concat(action.payload);
      }
    });
  }
});

export const { setSwiping, removeItem, setCurrent } = swipingSlice.actions;
export default swipingSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getStocks } from '../API/SwipeAPI';
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

export const swipingSlice = createSlice({
  name: 'swiping',
  initialState,
  reducers: {
    // For example:
    setSwiping: (state, action: PayloadAction<number>) => {
      // Handle the action here
    }
  },
  extraReducers: builder => {
    builder.addCase(getSomeStocks.fulfilled, (state, action) => {
      state.stocks = action.payload;  // Assuming the API returns an array of items directly.
    });
  }
});

export const { setSwiping } = swipingSlice.actions;
export default swipingSlice.reducer;

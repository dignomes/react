import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SwipingState = {
  index: number
  // Define the state shape here
};

const initialState: SwipingState = {
  index: 0
  // Initialize your state here
};

export const swipingSlice = createSlice({
  name: 'swiping',
  initialState,
  reducers: {
    // For example:
    setSwiping: (state, action: PayloadAction<number>) => {
      // Handle the action here
    }
  }
});

export const { setSwiping } = swipingSlice.actions;
export default swipingSlice.reducer;

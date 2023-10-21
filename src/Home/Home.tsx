import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleStock, getSomeStocks, sendStockDislike, sendStockLike } from '../Store/SwipingSlice';
import { AppDispatch, RootState } from '../Store/Store';
import { createAsyncThunk } from '@reduxjs/toolkit';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.swiping.stocks);
  
  // const aStock = dispatch(getSingleStock());
  // dispatch(sendStockLike('AAPL'));
  // dispatch(sendStockDislike('AAPL'));

  useEffect(() => {
    dispatch(getSomeStocks());
    
  }, []); 

  return (
    <Box 
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh" // This will make it take up the full height of the viewport
    >
      <AttachMoneyIcon fontSize="large" color="primary" />
      <Typography variant="h4" gutterBottom>
        Le punir Technologies
      </Typography>

      <Box mt={3}> {/* Margin-top for some space */}
        <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
          Like
        </Button>
        <Button variant="contained" color="secondary">
          Dislike
        </Button>
      </Box>
    </Box>
  );
}

export default Home;

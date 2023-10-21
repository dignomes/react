import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Box, Typography } from '@mui/material';
import ShareCard from '../Components/ShareCard/ShareCard'
import { useDispatch, useSelector } from 'react-redux';
import { getSomeStocks } from '../Store/SwipingSlice';
import { AppDispatch, RootState } from '../Store/Store';

const cat_indexes = [0,1,2,3];

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.swiping.stocks);

  console.log(items);
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


      <div className='cardContainer'>
        {items.map((r,i) => <ShareCard key={i} ticker={r.ticker} image_src={r.imageUrl}></ShareCard>)}
      </div>
      

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

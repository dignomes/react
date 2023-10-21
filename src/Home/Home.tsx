import React, {useMemo, useState} from 'react';
import Button from '@mui/material/Button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Box, Typography } from '@mui/material';
import { useSwipeable } from 'react-swipeable'
import ShareCard from '../Components/ShareCard/ShareCard'
 
const cat_indexes = [0,1,2,3]

const Home: React.FC = () => {
  const childRefs = useMemo(
    () =>
      Array(cat_indexes.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )



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
        {cat_indexes.map((r,i) => <ShareCard index={i} ref={childRefs} key={i}></ShareCard>)}
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

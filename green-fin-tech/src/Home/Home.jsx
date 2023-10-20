import React from 'react';
import Button from '@mui/material/Button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Box, Typography } from '@mui/material';

const Home: React.FC = () => {
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

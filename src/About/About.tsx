import React from 'react';
import { Container, Typography, Paper, Box, ThemeProvider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const About: React.FC = () => {

  const theme = useTheme();

  const sxStyles = { 
    margin: '20px 0', 
    padding: '15px', 
    color: theme.palette.primary.contrastText, 
    background: theme.palette.secondary.dark,
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box sx={{ width: '100%', display: 'block' }}>
          <img src="/images/Cartoon.png" alt="Cartoon" style={{ width: '100%' }} />
        </Box>
        
        <Paper elevation={3} sx={sxStyles}>
          <Typography variant="h5" gutterBottom>
            Environmentally Friendly Companies
          </Typography>
          <Typography variant="body1">
            Green companies are not only good for the environment but also for investors. As the world focuses more on sustainability, these companies have great potential.
          </Typography>
        </Paper>

        <Paper elevation={3} sx={sxStyles}>
          <Typography variant="h5" gutterBottom>
            Discover Stocks with Our App
          </Typography>
          <Typography variant="body1">
            Our app offers an easy way to find stocks on the market with a user-friendly design and real-time data.
          </Typography>
        </Paper>

        <Paper elevation={3} sx={sxStyles}>
          <Typography variant="h5" gutterBottom>
            AI-Powered Suggestions
          </Typography>
          <Typography variant="body1">
            Our platform uses AI to suggest stocks based on users' past choices, offering a more personalized experience.
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default About;

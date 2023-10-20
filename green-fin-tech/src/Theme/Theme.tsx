import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',  // Primary green color, representing nature.
      light: '#80E27E',
      dark: '#087F23',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FFEB3B',  // Sun-inspired yellow as the secondary color, symbolizing sunlight or warmth.
      light: '#FFF9C4',
      dark: '#FBC02D',
      contrastText: '#000',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#E8F5E9',  // Light green background.
      paper: '#AED581',  // Slightly darker green for raised components.
    },
    text: {
      primary: '#2E7D32',  // Primary text in green.
      secondary: '#6A4F4B',  // Earthy brown for secondary text, representing the soil.
    }
  },
});

export default theme;

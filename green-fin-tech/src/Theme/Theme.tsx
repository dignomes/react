import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#004F4A',  // Replaced with the first color.
      light: '#65FF9D',  // Replaced with the second color.
      dark: '#002F35',  // Replaced with the third color.
      contrastText: '#fff',
    },
    secondary: {
      main: '#02CB6D',  // Replaced with the fourth color.
      light: '#4FE8A0',  // Lightened version of the fourth color.
      dark: '#00984A',  // Darkened version of the fourth color.
      contrastText: '#000',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#C2EFD3',  // Lightened version of the primary main color.
      paper: '#33A085',  // Darkened version of the primary main color.
    },
    text: {
      primary: '#023825',  // Darkened version of the primary dark color.
      secondary: '#6A4F4B',  // Kept the original earthy brown for secondary text.
    }
  },
});

export default theme;

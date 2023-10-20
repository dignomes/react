import React from 'react';
import logo from './logo.svg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './Navbar/Nvabar'; // Import the Navbar component
import './App.css';
import theme from './Theme/Theme';
import Home from './Home/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Navbar />  {/* Use the Navbar component */}
        <Home></Home>
    </ThemeProvider>
  );
}

export default App;

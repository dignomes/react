import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import the Link component
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import cart icon
import Badge from '@mui/material/Badge'; // Import Badge component
import { RootState } from '../Store/Store';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { left } from '@popperjs/core';

const Navbar: React.FC = () => {
  const cartItemsAmount = useSelector((state: RootState) => state.cart.items.length);

  const theme = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Make sure Typography is the first child of Toolbar */}
        <Typography variant="h6" style={{ flexGrow: 1, color: theme.palette.primary.light, textAlign: left }}>
          Grindai
        </Typography>
        
        <Button color="inherit" component={Link} to="/">Swipe</Button>
        <Button color="inherit" component={Link} to="/about">Learn</Button>
        {/* <Button color="inherit" component={Link} to="/contacts">Contacts</Button> */}
        <Button color="inherit" component={Link} to="/cart">
          <Badge badgeContent={cartItemsAmount > 0 ? cartItemsAmount : null} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

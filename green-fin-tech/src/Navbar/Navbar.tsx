import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import the Link component
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import cart icon
import Badge from '@mui/material/Badge'; // Import Badge component

const Navbar: React.FC = () => {
  const newAmount: number = 10;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Le punir app
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/contacts">Contacts</Button>
        <Button color="inherit" component={Link} to="/cart">
          <Badge badgeContent={newAmount > 0 ? newAmount : null} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

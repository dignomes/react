import React from "react";
import { Card, Link, CardContent, CardActions, Button, Table, TableHead, TableRow, TableCell, TableBody, TextField, Checkbox } from '@mui/material';

// add remove button

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../../Store/Store';

import { selectStock, setAmount, setProportion, setSum } from './../../Store/CartSlice';
import { CartItem } from "../../types";

const CartTable: React.FC = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    
    const handleSumChange = (ticker: string, sum: number) => {
      console.log('handleSumChange: ' + sum);
      const payload: CartItem = {
        ticker,
        totalSum: sum,
        amountOfStocks: 0,
        proportion: 0,
        isSelected: false
      }

      dispatch(setSum(payload));
    }; 
    
    const handleAmountOfStocksChange = (ticker: string, amount: number) => {
      console.log('handleAmountOfStocksChange: ' + amount);
      const payload: CartItem = {
        ticker,
        totalSum: 0,
        amountOfStocks: amount,
        proportion: 0,
        isSelected: false
      }

      dispatch(setAmount(payload));
    }; 
    
    const handleProportionChange = (ticker: string, proportion: number) => {
      console.log('handleProportionChange: ' + proportion);
      const payload: CartItem = {
        ticker,
        totalSum: 0,
        amountOfStocks: 0,
        proportion,
        isSelected: false
      }

      dispatch(setProportion(payload));
    }; 
    
    const handleIsSelectedChange = (ticker: string, value: boolean) => {
      console.log('handleIsSelectedChange: ' + value);

      const payload: CartItem = {
        ticker,
        totalSum: 0,
        amountOfStocks: 0,
        proportion: 0,
        isSelected: value
      }

      dispatch(selectStock(payload));
    }; 
  
    return (
    <Card style={{ backgroundColor: '#f5f5f5' }}> {/* Change the background color as needed */}
        <CardContent>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell></TableCell>
                <TableCell>Stock ticker</TableCell>
                <TableCell>Amount to Invest ($)</TableCell>
                <TableCell>Number of Stocks</TableCell>
                <TableCell>Proportion of Portfolio</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {cartItems.map((row, index) => (
                <TableRow key={index}>
                    <TableCell>
                        <Checkbox
                        checked={row.isSelected}
                        onChange={(e) => handleIsSelectedChange(row.ticker, e.target.checked)}
                        />
                    </TableCell>
                    <TableCell>
                        <Link 
                            component="a" 
                            href={`https://finance.yahoo.com/quote/${row.ticker}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {row.ticker}
                        </Link>
                    </TableCell>
                    <TableCell>
                        <TextField
                        value={row.totalSum}
                        onChange={(e) => 
                            handleSumChange(row.ticker, parseFloat(e.target.value))
                        }
                        type="number"
                        variant="outlined"
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                        value={row.amountOfStocks}
                        onChange={(e) => handleAmountOfStocksChange(row.ticker, parseFloat(e.target.value))}
                        type="number"
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                        value={row.proportion}
                        onChange={(e) => handleProportionChange(row.ticker, parseFloat(e.target.value))}
                        type="number"
                        />
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </CardContent>
        <CardActions style={{ justifyContent: 'flex-end' }}>
        <Button variant="contained" color="primary">
            Buy
        </Button>
        </CardActions>
    </Card>
    );
  };
  
  export default CartTable;
  
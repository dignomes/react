import React from "react";
import { Card, Link, CardContent, CardActions, Button, Table, TableHead, TableRow, TableCell, TableBody, TextField, Checkbox, TableContainer, useTheme } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../../Store/Store';

import { removeItem, setAmount, setProportion, setSum } from './../../Store/CartSlice';
import { CartItem } from "../../types";
import styles from './CartTable.module.css';

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

    const handleRemoveItem = (ticker: string) => {
        dispatch(removeItem(ticker));
    }

    const theme = useTheme();

      const cornerRounding = '7px';
      const backgroundColor = theme.palette.secondary.dark;
      const textColor = theme.palette.primary.contrastText;
  
    return (
    <Card style={{ backgroundColor: '#f5f5f5' }}> {/* Change the background color as needed */}
        <CardContent>
        <TableContainer style={{ overflowX: 'auto' }}>
        <Table id="myTable">
            <TableHead>
            <TableRow>
                <TableCell 
                            className={`${styles.firstColumnStyle} ${styles.stickyCell} ${styles.rightAlignCell }`} 
                            style={{ 
                                background: backgroundColor,
                                color: textColor,
                             }}
                             
                            sx={{ borderTopLeftRadius: cornerRounding }}
                            >
                    Symbol
                </TableCell>
                <TableCell className={`${styles.cellStyle} ${styles.rightAlignCell } `}>Price</TableCell>
                <TableCell className={`${styles.cellStyle} ${styles.rightAlignCell } `}>Shares</TableCell>
                <TableCell className={`${styles.cellStyle} ${styles.rightAlignCell } `}>Value ($)</TableCell>
                <TableCell className={`${styles.cellStyle} ${styles.rightAlignCell } `}>Proportion</TableCell>
                <TableCell className={`${styles.cellStyle} ${styles.rightAlignCell } `}>Remove</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {cartItems.map((row, index) => (
                <TableRow key={index}>
                    <TableCell 
                          className={`${styles.firstColumnStyle} ${styles.stickyCell}  ${styles.rightAlignCell } `} 
                          style={{ 
                            background: backgroundColor,
                            
                         }}
                         sx={index === cartItems.length - 1 ? { borderBottomLeftRadius: cornerRounding } : {}}
                         
                        >
                        <Link 
                            component="a" 
                            href={`https://finance.yahoo.com/quote/${row.ticker}`} 
                            target="_blank" 
                            rel="noopener noreferrer" style={{ 
                                color: textColor,
                                textDecoration: 'underline',
                                textDecorationColor: textColor
                            }}
                        >
                            {row.ticker}
                        </Link>
                    </TableCell>
                    <TableCell className={`${styles.cellStyle} ${styles.rightAlignCell } `}>
                        10
                    </TableCell>
                    <TableCell className={styles.cellStyle}>
                        <TextField className={`${styles.rightAlignCell } `}
                        value={row.proportion}
                        onChange={(e) => handleProportionChange(row.ticker, parseFloat(e.target.value))}
                        type="number"
                        />
                    </TableCell>
                    <TableCell className={styles.cellStyle}>
                        <TextField
                        value={row.totalSum}
                        onChange={(e) => 
                            handleSumChange(row.ticker, parseFloat(e.target.value))
                        }
                        type="number"
                        variant="outlined"
                        />
                    </TableCell>
                    <TableCell className={styles.cellStyle}>
                        <TextField
                        value={row.amountOfStocks}
                        onChange={(e) => handleAmountOfStocksChange(row.ticker, parseFloat(e.target.value))}
                        type="number"
                        />
                    </TableCell>
                    <TableCell className={`${styles.cellStyle} ${styles.rightAlignCell } `}>
                        <Button 
                            variant="contained" 
                            style={{ 
                                color: textColor,
                                background: backgroundColor,
                            }}
                            onClick={() => handleRemoveItem(row.ticker)}
                        >
                            Remove
                        </Button>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
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
  
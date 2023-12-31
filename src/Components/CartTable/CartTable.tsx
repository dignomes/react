import React from "react";
import { Card, Link, CardContent, CardActions, Button, Table, TableHead, TableRow, TableCell, TableBody, TextField, Checkbox, TableContainer, useTheme, Paper, Typography } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../../Store/Store';

import { removeItem, setAmount, setProportion, setSum } from './../../Store/CartSlice';
import { CartItem } from "../../types";
import styles from './CartTable.module.css';

const CartTable: React.FC = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    
    const handleSumChange = (ticker: string, sum: number) => {
      const payload: CartItem = {
        ticker,
        totalSum: sum,
        amountOfStocks: 0,
        proportion: 0,
        price: 0
      }

      dispatch(setSum(payload));
    }; 
    
    const handleAmountOfStocksChange = (ticker: string, amount: number) => {
      const payload: CartItem = {
        ticker,
        totalSum: 0,
        amountOfStocks: amount,
        proportion: 0,
        price: 0
      }

      dispatch(setAmount(payload));
    }; 
    
    const handleProportionChange = (ticker: string, proportion: number) => {
      const payload: CartItem = {
        ticker,
        totalSum: 0,
        amountOfStocks: 0,
        proportion,
        price:0
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
      const smallButtonSizeStyles = {
        fontSize: '0.75rem',
        padding: '4px 6px',
        height: '32px'
        };

        const inputPropsStyles = {
            style: {
                fontSize: '0.75rem'
            }
        };

    const sxStyles = { 
        margin: '20px 0', 
        padding: '15px', 
        color: theme.palette.primary.contrastText, 
        background: theme.palette.secondary.dark,
    };
  
    return (
    <Card style={{ backgroundColor: '#f5f5f5' }}> {/* Change the background color as needed */}
        <CardContent>
            {
            cartItems.length === 0 ? (
            <Paper elevation={3} 
                style={{ padding: '20px', textAlign: 'center' }}
                sx={sxStyles}
                >
                <Typography variant="h6">
                The cart is empty
                </Typography>
            </Paper>
                ) : (
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
                    <TableCell className={`${styles.cellStyle} ${styles.rightAlignCell } ${styles.header}`}>Shares</TableCell>
                    <TableCell className={`${styles.cellStyle} ${styles.rightAlignCell } ${styles.header}`}>Total ($)</TableCell>
                    <TableCell className={`${styles.cellStyle} ${styles.rightAlignCell } ${styles.header}`}>Percentage</TableCell>
                    <TableCell className={`${styles.cellStyle} ${styles.rightAlignCell } `}></TableCell>
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
                            {row.price}
                        </TableCell>
                        <TableCell
                            align="right" 
                            className={styles.cellStyle}>
                            <TextField
                                style={smallButtonSizeStyles}
                                InputProps={inputPropsStyles}
                                size="small"
                                value={row.amountOfStocks}
                                onChange={(e) => handleAmountOfStocksChange(row.ticker, parseFloat(e.target.value))}
                                type="number"
                            />
                        </TableCell>
                        <TableCell 
                            align="right" 
                            className={styles.cellStyle}>
                            <TextField
                                style={smallButtonSizeStyles}
                                InputProps={inputPropsStyles}
                                size="small"
                            value={row.totalSum}
                            onChange={(e) => 
                                handleSumChange(row.ticker, parseFloat(e.target.value))
                            }
                            type="number"
                            variant="outlined"
                            />
                        </TableCell>
                        <TableCell 
                            align="right" 
                            className={styles.cellStyle}>
                            <TextField
                                style={smallButtonSizeStyles}
                                InputProps={inputPropsStyles}
                                size="small"
                            value={row.proportion}
                            onChange={(e) => handleProportionChange(row.ticker, parseFloat(e.target.value))}
                            type="number"
                            />
                        </TableCell>
                        <TableCell className={`${styles.cellStyle} ${styles.rightAlignCell } `}>
                            <Button size="small" 
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

            
            )
        }
        </CardContent>
        <CardActions style={{ justifyContent: 'flex-end' }}>
        <Button 
            variant="contained"
            style={{ marginRight: '16px', marginBottom: '16px' }}
            color="primary"
            disabled={cartItems.length === 0}>
            Invest
        </Button>
        </CardActions>
    </Card>
    );
  };
  
  export default CartTable;
  
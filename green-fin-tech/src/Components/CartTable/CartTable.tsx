import React from "react";
import { Card, Link, CardContent, CardActions, Button, Table, TableHead, TableRow, TableCell, TableBody, TextField, Checkbox } from '@mui/material';

const CartTable: React.FC = () => {
    const [data, setData] = React.useState([
        {
          ticker: 'AAPL',
          totalSum: 0,
          amountOfStocks: 0,
          proportion: 0,
          isSelected: false
        },
        {
          ticker: 'AAPL',
          totalSum: 0,
          amountOfStocks: 0,
          proportion: 0,
          isSelected: false
        },
        {
          ticker: 'AAPL',
          totalSum: 0,
          amountOfStocks: 0,
          proportion: 0,
          isSelected: false
        },
        {
          ticker: 'AAPL',
          totalSum: 0,
          amountOfStocks: 0,
          proportion: 0,
          isSelected: false
        },
        {
          ticker: 'AAPL',
          totalSum: 0,
          amountOfStocks: 0,
          proportion: 0,
          isSelected: false
        },
        {
          ticker: 'AAPL',
          totalSum: 0,
          amountOfStocks: 0,
          proportion: 0,
          isSelected: false
        },
        {
          ticker: 'AAPL',
          totalSum: 0,
          amountOfStocks: 0,
          proportion: 0,
          isSelected: false
        },
        {
          ticker: 'AAPL',
          totalSum: 0,
          amountOfStocks: 0,
          proportion: 0,
          isSelected: false
        },
        {
          ticker: 'AAPL',
          totalSum: 0,
          amountOfStocks: 0,
          proportion: 0,
          isSelected: false
        },
        {
          ticker: 'AAPL',
          totalSum: 0,
          amountOfStocks: 0,
          proportion: 0,
          isSelected: false
        },
    ]);

    type DataType = {
        ticker: string;
        totalSum: number;
        amountOfStocks: number;
        proportion: number;
        isSelected: boolean;
      };
      
      const handleSumChange = (index: number, value: string) => {
        console.log('handleSumChange: ' + value);
      }; 
      
      const handleAmountOfStocksChange = (index: number, value: string) => {
        console.log('handleAmountOfStocksChange: ' + value);
      }; 
      
      const handleProportionChange = (index: number, value: string) => {
        console.log('handleProportionChange: ' + value);
      }; 
      
      const handleIsSelectedChange = (index: number, value: boolean) => {
        console.log('handleIsSelectedChange: ' + value);
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
            {data.map((row, index) => (
                <TableRow key={index}>
                    <TableCell>
                        <Checkbox
                        checked={row.isSelected}
                        onChange={(e) => handleIsSelectedChange(index, e.target.checked)}
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
                        onChange={(e) => handleSumChange(index, e.target.value)}
                        type="number"
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                        value={row.amountOfStocks}
                        onChange={(e) => handleAmountOfStocksChange(index, e.target.value)}
                        type="number"
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                        value={row.proportion}
                        onChange={(e) => handleProportionChange(index, e.target.value)}
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
  
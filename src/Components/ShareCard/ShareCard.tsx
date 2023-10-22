import React from 'react'
import {Card, Paper, Typography} from '@mui/material'
import {sendStockDislike, sendStockLike} from './../../Store/SwipingSlice';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../Store/Store";
import InfoComponent from '../InfoComponent/InfoComponent';
import SwipeableImage from "./SwipeableImage";
import {addItem} from '../../Store/CartSlice';
import {CartItem} from '../../types';
import {useTheme} from '@mui/material/styles';


const ShareCard = () => {
    const dispatch = useDispatch<AppDispatch>();
    const swiping = useSelector((state: RootState) => state.swiping);
    const items = swiping.stocks;
    const current = swiping.currentStock;

    let filtered_items = [...items].reverse();
    filtered_items = [...filtered_items].slice(-3);

    const theme = useTheme();

    const sxStyles = {
        padding: '2px',
        color: theme.palette.primary.contrastText,
        background: theme.palette.secondary.dark,
        height: '15%',
    };


    const onSwiped = (direction: string, id: number) => {
        console.log("User Swiped!", direction);
        if (direction === 'left') {
            console.log('dislike')
            dispatch(sendStockDislike({id: current ? current.id : 0, load_data: items.length <= 3}))
        }
        if (direction === 'right') {
            console.log('like')
            dispatch(sendStockLike({id: current ? current.id : 0, load_data: items.length <= 3}))
            if(current) {
                const min = 10;
                const max = 400;
                const randomPrice = Math.floor(Math.random() * (max - min + 1) + min);

                const cartItem: CartItem = {
                    ticker: current.ticker_symbol,
                    totalSum: 0,
                    amountOfStocks: 0,
                    proportion: 0,
                    price: randomPrice
                };

                dispatch(addItem(cartItem))
            }
        }
    };

    if (!current) {
        return (<div>no data</div>)
    }

    return (<Card className='swipe'>
        <Paper elevation={2} sx={sxStyles}>
            <Typography variant="h6" gutterBottom>
                {current.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Ticker: {current.ticker_symbol}
            </Typography>
        </Paper>
        <div className='tinderCard'>
            {filtered_items.map((stock, i) => {
                return i === filtered_items.length - 1 ? (
                    <SwipeableImage stock={stock} onSwiped={onSwiped} key={stock.title}/>) : (
                    <div className="cardItem" key={stock.title}>
                        <div>
                            <img
                                src={stock.image_url}
                                className="card"
                                alt={stock.title}
                                onError={({currentTarget}) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = "data:image/png;base64,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";
                                }}
                            />
                        </div>
                    </div>)
            })}
        </div>

        <InfoComponent current={current}/>
    </Card>)
}

export default ShareCard;

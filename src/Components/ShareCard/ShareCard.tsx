import React from 'react'
import {Card} from '@mui/material'
import {sendStockDislike, sendStockLike} from './../../Store/SwipingSlice';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../Store/Store";
import InfoComponent from '../InfoComponent/InfoComponent';

import Draggable from 'react-draggable'
import { addItem } from '../../Store/CartSlice';
import { CartItem } from '../../types';

const ShareCard = () => {
    const dispatch = useDispatch<AppDispatch>();
    const swiping = useSelector((state: RootState) => state.swiping);
    const cart = useSelector((state: RootState) => state.cart);
    const items = swiping.stocks;
    const current = swiping.currentStock;

    let filtered_items = [...items].reverse();
    filtered_items = [...filtered_items].slice(-3);

    const onSwiped = (e: any, data: any) => {
        console.log("User Swiped!", data);
        if (data.x < 0) {
            console.log('dislike')
            dispatch(sendStockDislike({id: current ? current.id : 0, load_data: items.length <= 3}))
        }
        if (data.x > 0) {
            console.log('like')
            dispatch(sendStockLike({id: current ? current.id : 0, load_data: items.length <= 3}))
            if(current) {
                
                const cartItem: CartItem = {
                    ticker: current.ticker_symbol,
                    totalSum: 0,
                    amountOfStocks: 0,
                    proportion: 0
                };

                dispatch(addItem(cartItem))
            }
        }
    };

    if (!current) {
        return (<div>no data</div>)
    }

    return (<Card className='swipe'>
        
        <div className='tinderCard'>
            {filtered_items.map((r, i) => {
                return i === filtered_items.length - 1 ? (<div className="cardItem" key={r.title}>
                    <Draggable axis="x" onStop={onSwiped}>
                        <img src={r.image_url} className="card" alt={r.title}/>
                    </Draggable>
                </div>) : (<div className="cardItem" key={r.title}>
                    <div>
                        <img src={r.image_url} className="card" alt={r.title}/>
                    </div>
                </div>)
            })}
        </div>

        <InfoComponent current={current} />
    </Card>)
}

export default ShareCard;

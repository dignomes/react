import React from 'react'
import {Card} from '@mui/material'
import {sendStockDislike, sendStockLike} from './../../Store/SwipingSlice';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../Store/Store";
import InfoComponent from '../InfoComponent/InfoComponent';

import Draggable from 'react-draggable'
import SwipeableImage from "./SwipeableImage";

const ShareCard = () => {
    const dispatch = useDispatch<AppDispatch>();
    const swiping = useSelector((state: RootState) => state.swiping);
    const items = swiping.stocks;
    const current = swiping.currentStock;


    let filtered_items = [...items].reverse();
    filtered_items = [...filtered_items].slice(-3);

    const onSwiped = (direction: string, id: number) => {
        console.log("User Swiped!", direction);
        if (direction === 'left') {
            console.log('dislike')
            dispatch(sendStockDislike({id: current ? current.id : 0, load_data: items.length <= 3}))
        }
        if (direction === 'right') {
            console.log('like')
            dispatch(sendStockLike({id: current ? current.id : 0, load_data: items.length <= 3}))
        }
    };

    if (!current) {
        return (<div>no data</div>)
    }

    return (<Card className='swipe'>

        <div className='tinderCard'>
            {filtered_items.map((r, i) => {
                return i === filtered_items.length - 1 ? (<div className="cardItem" key={r.title}>
                    <SwipeableImage stock={r} onSwiped={onSwiped}/>
                </div>) : (<div className="cardItem" key={r.title}>
                    <div>
                        <img src={r.image_url} className="card" alt={r.title}/>
                    </div>
                </div>)
            })}
        </div>

        <InfoComponent current={current}/>
    </Card>)
}

export default ShareCard;

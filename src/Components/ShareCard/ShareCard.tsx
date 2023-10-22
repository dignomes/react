import React, {useMemo, useRef} from 'react'
import {useSwipeable} from 'react-swipeable'
import {Card} from '@mui/material'
import {removeItem, sendStockLike, sendStockDislike} from './../../Store/SwipingSlice';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../Store/Store";

import Draggable from 'react-draggable'


const ShareCard = () => {
    const dispatch = useDispatch<AppDispatch>();
    const swiping = useSelector((state: RootState) => state.swiping);
    const items = swiping.stocks;
    const current = swiping.currentStock;


    let filtered_items = [...items].reverse();
    filtered_items = [...filtered_items].slice(-3);
    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            console.log("User Swiped!", eventData);
            // dispatch(removeItem(current ? current.id : 0));
            if (eventData.dir === 'Left') {
                dispatch(sendStockDislike(current ? current.id : 0))
            }
            if (eventData.dir === 'Right') {
                dispatch(sendStockLike(current ? current.id : 0))
            }
        },
    });

    if (!current) {
        return (<div>no data</div>)
    }

    return (<Card className='swipe'>
        <div className='tinderCard'>
            {filtered_items.map((r, i) => {
                return i === filtered_items.length - 1 ? (<div className="cardItem" {...handlers} key={r.title}>
                    <Draggable>
                        <img src={r.image_url} className="card" alt={r.title}/>
                    </Draggable>
                </div>) : (<div className="cardItem" key={r.title}>
                    <Draggable>
                        <img src={r.image_url} className="card" alt={r.title}/>
                    </Draggable>
                </div>)
            })}
        </div>
        <div className="textOverlay">
            {current.description}
        </div>
    </Card>)
}

export default ShareCard;

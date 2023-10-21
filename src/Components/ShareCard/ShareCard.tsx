import React from 'react'
import TinderCard from 'react-tinder-card'
import {Card} from '@mui/material'
import {removeItem, sendStockLike, sendStockDislike} from './../../Store/SwipingSlice';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../Store/Store";

const ShareCard = () => {
    const dispatch = useDispatch<AppDispatch>();
    let items = useSelector((state: RootState) => state.swiping.stocks);
    const current = useSelector((state: RootState) => state.swiping.currentStock);

    items = [...items].reverse();

    if (!current) {
        return (<div>no data</div>)
    }
    //
    // const removeCard = () => {
    //     dispatch(removeItem(current.id));
    // }

    const handleSwipe = (direction: any) => {
        dispatch(removeItem(current.id));
        if (direction === 'right') {
            dispatch(sendStockLike(current.id))
        } else {
            dispatch(sendStockDislike(current.id))
        }
    }

    console.log(items);

    let isVisible = true
    return (<Card className='swipe'>
        <div className='tinderCard'>
            {items.map((r, i) => (<TinderCard
                onSwipe={handleSwipe}
                // onCardLeftScreen={removeCard}
                preventSwipe={['up', 'down']}
                swipeRequirementType='position'
                className='cardItem'
                key={i}
            >
                <img src={r.image_url} className='card' alt={r.title}/>
            </TinderCard>))}
        </div>
        <div className="textOverlay">
            {current.description}
        </div>
    </Card>)
}

export default ShareCard;
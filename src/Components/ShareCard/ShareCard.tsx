import React from 'react'
import TinderCard from 'react-tinder-card'
import {Card} from '@mui/material'
import {removeItem, sendStockLike, sendStockDislike, loadStocks} from './../../Store/SwipingSlice';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../Store/Store";

const ShareCard = () => {
    // const dispatch = useDispatch<AppDispatch>();
    const items = useSelector((state: RootState) => state.swiping.stocks);
    const current = useSelector((state: RootState) => state.swiping.currentStock);


    console.log('items', items);

    let filtered_items = [...items].reverse();
    filtered_items = [...filtered_items].slice(-3);
    console.log('filtered_items', items);

    if (!current) {
        return (<div>no data</div>)
    }
    //
    // const removeCard = () => {
    //     dispatch(removeItem(current.id));
    // }

    const handleSwipe = (direction: any, id: any) => {

        // dispatch(removeItem(current.ticker_symbol));
        if (direction === 'right') {
            console.log('Like ' + id + ' ' + Math.random());
            // dispatch(sendStockLike(current.id))
        } else {
            // dispatch(sendStockDislike(current.id))
        }

        // if(items.length <= 3) {
        //     dispatch(loadStocks())
        // }
    }

    let isVisible = true
    return (<Card className='swipe'>
        <div className='tinderCard'>
            {filtered_items.map((r, i) => (<TinderCard
                // onSwipe={(direction) => {console.log('Like ' + i + ' ' + Math.random())}}
                onSwipe={(direction) => {handleSwipe(direction, i)}}
                onCardLeftScreen={() => {console.log('Left screen')}}
                preventSwipe={['up', 'down']}
                swipeRequirementType='position'
                className='cardItem'
                key={r.id}
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
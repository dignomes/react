import React from 'react'
import TinderCard from 'react-tinder-card'
import {Card} from '@mui/material'
import { removeItem } from './../../Store/SwipingSlice';
import {useDispatch} from "react-redux";

const ShareCard = ({ ticker, image_src } : {ticker: string, image_src: string}) => {
    // const index = useSelector((state: RootState) => state.swiping.index);
    const dispatch = useDispatch();

    const removeCard = () => {
        dispatch(removeItem(ticker))
    }

    let isVisible = true
    return (<TinderCard
            className='swipe'
            onSwipe={(direction) => console.log(`You swiped: ${direction}, index: ${ticker}`)}
            onCardLeftScreen={removeCard}
            preventSwipe={['up', 'down']}
        >
            <Card style={{backgroundColor: '#f5f5f5', minWidth: '100%', minHeight: '100%'}}>
                <img src={image_src} className='card' alt='something'/>
            </Card>
        </TinderCard>
    )
}

export default ShareCard;
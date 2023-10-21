import React from 'react'
import TinderCard from 'react-tinder-card'
import {Card} from '@mui/material'
import {removeItem, sendStockLike, sendStockDislike} from './../../Store/SwipingSlice';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../Store/Store";

const ShareCard = ({ id, image_src, description } : {id: number, image_src: string, description: string}) => {
    const dispatch = useDispatch<AppDispatch>();

    const removeCard = () => {
        dispatch(removeItem(id));
    }

    const handleSwipe = (direction: any) => {
        if(direction === 'right'){
            dispatch(sendStockLike(id))
        } else {
            dispatch(sendStockDislike(id))
        }
    }

    let isVisible = true
    return (<TinderCard
            className='swipe'
            onSwipe={handleSwipe}
            onCardLeftScreen={removeCard}
            preventSwipe={['up', 'down']}
            swipeRequirementType='position'
        >
            <Card style={{backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '100%', minHeight: '100%'}}>
                <img src={image_src} className='card' alt='something'/>
            </Card>
            <div className="textOverlay">
                {description}
            </div>
        </TinderCard>
    )
}

export default ShareCard;
import React from 'react'
import TinderCard from 'react-tinder-card'
import {Card} from '@mui/material'
import {useSelector} from "react-redux";
import {RootState} from "../../Store/Store";

const ShareCard = ({ index } : {index: number}) => {
    // const index = useSelector((state: RootState) => state.swiping.index);

    return (
        <TinderCard className='swipe'>
            <Card style={{backgroundColor: '#f5f5f5'}}>
                <img src={process.env.PUBLIC_URL + '/images/cat' + index + '.jpeg'} className='card' alt='something'/>
            </Card>
        </TinderCard>
    )
}

export default ShareCard;
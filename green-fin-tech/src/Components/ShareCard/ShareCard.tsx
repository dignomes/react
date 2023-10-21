import React from 'react'
import TinderCard from 'react-tinder-card'
import { Card } from '@mui/material'

const ShareCard = ({ index, ref }: { index: number, ref: any}) => {
  

    return <TinderCard ref={ref} className='swipe'>
        <Card style={{ backgroundColor: '#f5f5f5' }}>
          <img src={process.env.PUBLIC_URL + '/images/cat' + index + '.jpeg'} className='card'/>
        </Card>
    </TinderCard>
}

export default ShareCard;
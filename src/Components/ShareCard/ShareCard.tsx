import React, {useMemo, useRef} from 'react'
import TinderCard from 'react-tinder-card'
import {useSwipeable} from 'react-swipeable'
import {Card} from '@mui/material'
import {removeItem, sendStockLike, sendStockDislike} from './../../Store/SwipingSlice';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../Store/Store";

import Draggable from 'react-draggable'

//
// const refs = [
//     React.createRef<any>(),
//     React.createRef<any>(),
//     React.createRef<any>(),
//     React.createRef<any>(),
//     React.createRef<any>()
// ]

const ShareCard = () => {
    const dispatch = useDispatch<AppDispatch>();
    const swiping = useSelector((state: RootState) => state.swiping);
    const items = swiping.stocks;
    const current = swiping.currentStock;


    const filtered_items = [...items].reverse();
    const handlers_arr = filtered_items.map((e,i) => {

    })
    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            console.log("User Swiped!", eventData);
            dispatch(removeItem(current ? current.id : 0));
        },
    });

    if (!current) {
        return (<div>no data</div>)
    }
    //
    // const removeCard = () => {
    //     dispatch(removeItem(current.id));
    // }

    const handleSwipe = (direction: any, i: number) => {
        // dispatch(removeItem(current.id));
        console.log('swipe', i)
        // if (direction === 'right') {
        //     dispatch(sendStockLike(current.id))
        // } else {
        //     dispatch(sendStockDislike(current.id))
        // }
    }

    console.log(items);


    // const swipe = async (dir) => {
    //     if (canSwipe && currentIndex < db.length) {
    //         await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    //     }
    // }

    let isVisible = true
    return (<Card className='swipe'>
        <div className='tinderCard'>
            {filtered_items.map((r, i) => (<div className='cardItem' key={r.title} {...handlers}>
                    <Draggable>
                        <img src={r.image_url} className='card' alt={r.title}/>
                    </Draggable>
                </div>))}
        </div>
        <div className="textOverlay">
            {current.description}
        </div>
    </Card>)
}

export default ShareCard;


//
//             {filtered_items.map((r, i) => (<TinderCard
//                 // ref={refs[i]}
//                 onSwipe={(d) => handleSwipe(d, i)}
//                 onCardLeftScreen={() => console.log('left screen')}
//                 preventSwipe={['up', 'down']}
//                 swipeRequirementType='position'
//                 className='cardItem'
//                 key={i}
//             >
//                 <img src={r.image_url} className='card' alt={r.title}/>
//             </TinderCard>))}


// {
//     filtered_items.map((r, i) => (
//         <div className='cardItem' key={r.title}>
//             <img src={r.image_url} className='card' alt={r.title}/>
//         </div>
//     ))
// }
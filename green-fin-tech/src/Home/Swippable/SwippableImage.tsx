import React, { useState } from 'react';
import { useSwipeable, } from 'react-swipeable';
import Draggable from 'react-draggable'
import './SwipeableImage.css'

const IMG_WIDTH = 200;
const IMG_HEIGHT = 200;

const SwipeableImage = () => {
    const [index, setIndex] = useState(0);
    const [dragPosition, setDragPosition] = useState(null);

    const handlers = useSwipeable({
        // send requests to back
        // like
        onSwipedLeft: (eventData) => setIndex(index + 1),
        // disslike
        onSwipedRight: (eventData) => setIndex(index - 1),
      });


      return <Draggable
            position={{x:0, y: 0}}
            >
            <img {...handlers} src={process.env.PUBLIC_URL + '/images/cat' + index + '.jpeg'} className="swiper"/>
        </Draggable>;
};

export default SwipeableImage;
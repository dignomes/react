// SwipeableImage.js
import React from 'react';
import { useGesture } from 'react-use-gesture';
import { useSpring, animated } from 'react-spring';
import {Stock} from "../../types";

const SwipeableImage = ({ stock, onSwiped }: {stock: Stock, onSwiped: Function}) => {
  const [props, set] = useSpring(() => ({ x: 0 }));

  const bind = useGesture({
    onDrag: ({ down, movement: [xDelta] }) => {

      if (!down) {
        // If the image is swiped more than 50px, animate it off the screen
        if (Math.abs(xDelta) > 50) {
          const direction = xDelta > 0 ? 'right' : 'left';

        // Perform any additional actions based on the direction (e.g., trigger an event)
          console.log(`Swiped ${direction}`);

          onSwiped(direction)

          set({ x: xDelta > 0 ? window.innerWidth : -window.innerWidth });
        } else {
          // If not, reset the position
          set({ x: 0 });
        }
      } else {
        // When dragging, update the position
        set({ x: xDelta });
      }
    },
  });

  return (
    <animated.div
      {...bind()}
      style={{
        width: '100%',
        top: 0,
        left: 0,
        backgroundSize: 'cover',
        willChange: 'transform',
        transform: props.x.interpolate((x) => `translate3d(${x}px, 0, 0)`),
      }}
    >
        <img src={stock.image_url} className="card" alt={stock.title}/>
    </animated.div>
  );
};

export default SwipeableImage;

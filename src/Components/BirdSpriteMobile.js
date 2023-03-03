
import {AnimatedSprite} from '@inlet/react-pixi'
import {useState, useCallback,  useEffect, useRef} from 'react'

import b1 from "../Assets/sprites/bird_01.png"
import b2 from "../Assets/sprites/bird_02.png"
import b3 from "../Assets/sprites/bird_03.png"
import b4 from "../Assets/sprites/bird_04.png"

import * as PIXI from 'pixi.js'

const width = window.innerWidth
const height = window.innerHeight

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST

const useDrag = ({ x, y }) => {
  
  const sprite = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x, y });
  
  const onDown = useCallback(() => setIsDragging(true), []);
  const onUp = useCallback(() => setIsDragging(false), []);
  const onMove = useCallback(e => {
    if (isDragging && sprite.current) {
      setPosition(e.data.getLocalPosition(sprite.current.parent));
    }
  }, [isDragging, setPosition]);
  
  return {
    ref: sprite,
    interactive: true, 
    pointerdown: onDown, 
    pointerup: onUp, 
    pointerupoutside: onUp,
    pointermove: onMove,
    alpha: isDragging ? 0.5 : 1,
  
    anchor: 0.5,
    position,
  };
};

const BirdSprite = ({ x = width/8.5, y =height/1.30, ...props }) => {
  const bind = useDrag({ x, y });
  const bird = [];
  
        bird[0] = b1;
        bird[1] = b1;
        bird[2] = b4;
        bird[3] = b1;
        bird[4] = b2;
        bird[5] = b3;
        bird[6] = b2;
        bird[7] = b1;
        bird[8] = b2;
        bird[9] = b3;
        bird[10] = b2;
      
        


       
  return (


  
    <AnimatedSprite
      width={width/3.5} 
      height={height/4.5}
      images={bird}
      isPlaying={true}
      initialFrame={0}
      animationSpeed={0.06}
      buttonMode
      {...bind}
      {...props}
    />
  

  )
  };
export default BirdSprite;
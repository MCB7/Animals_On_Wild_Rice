
import {AnimatedSprite} from '@inlet/react-pixi'
import {useState, useCallback,  useEffect, useRef} from 'react'

import p1 from "../Assets/sprites/pig_01.png"
import p2 from "../Assets/sprites/pig_02.png"
import p3 from "../Assets/sprites/pig_03.png"

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

const PigSprite = ({ x = width/9.50, y =height/2.50, ...props }) => {
  const bind = useDrag({ x, y });
  const pig = [];
  
        pig[0] = p1;
        pig[1] = p2;
        pig[2] = p1;
        pig[3] = p2;
        pig[4] = p1;
        pig[5] = p2;
        pig[6] = p1;
        pig[7] = p2;
        pig[8] = p3;
        pig[9] = p2;
        pig[10] = p3;
        pig[11] = p2;
        pig[12] = p3;
      
      
      
        


       
  return (


  
    <AnimatedSprite
      width={width/5.5} 
      height={height/3.5}
      images={pig}
      isPlaying={true}
      initialFrame={0}
      animationSpeed={0.06}
      buttonMode
      {...bind}
      {...props}
    />
  

  )
  };
export default PigSprite;
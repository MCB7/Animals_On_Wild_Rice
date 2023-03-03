import {AnimatedSprite} from '@inlet/react-pixi'
import {useState, useCallback,  useEffect, useRef} from 'react'

import r1 from "../Assets/sprites/rice_01.png"
import r2 from "../Assets/sprites/rice_02.png"
import r3 from "../Assets/sprites/rice_03.png"
import r4 from "../Assets/sprites/rice_04.png"

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

const RiceSprite = ({ x = width/2.25, y =height/1.25, ...props }) => {
  const bind = useDrag({ x, y });
  const rice = [];
  
     rice[0]=r1
     rice[1]=r2
     rice[2]=r3
     rice[3]=r4
    
        


       
  return (


  
    <AnimatedSprite
      width={width/2.5} 
      height={height/3.5}
      images={rice}
      isPlaying={true}
      initialFrame={0}
      animationSpeed={0.06}
      buttonMode
      {...bind}
      {...props}
    />
  

  )
  };
export default RiceSprite;

import {AnimatedSprite} from '@inlet/react-pixi'
import {useState, useCallback,  useEffect, useRef} from 'react'

import c1 from "../Assets/sprites/cat_01.png"
import c2 from "../Assets/sprites/cat_02.png"
import c3 from "../Assets/sprites/cat_03.png"
import c4 from "../Assets/sprites/cat_04.png"
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

const CatSprite = ({ x = width/1.20, y =height/1.50, ...props }) => {
  const bind = useDrag({ x, y });
  const cat = [];
  
        cat[0] = c1;
        cat[1] = c4;
        cat[2] = c1;
        cat[3] = c4;
        cat[4] = c1;
        cat[5] = c4;
        cat[6] = c2;
        cat[7] = c3;
        cat[8] = c2;
        cat[9] = c3;
        cat[10] = c2;
        cat[11] = c3;
        


       
  return (


  
    <AnimatedSprite
      width={width/4.5} 
      height={height/3.5}
      images={cat}
      isPlaying={true}
      initialFrame={0}
      animationSpeed={0.06}
      buttonMode
      {...bind}
      {...props}
    />
  

  )
  };
export default CatSprite;

import {AnimatedSprite} from '@inlet/react-pixi'
import {useState, useCallback,  useEffect, useRef} from 'react'

import d1 from "../Assets/sprites/dog_01.png"
import d2 from "../Assets/sprites/dog_02.png"
import d3 from "../Assets/sprites/dog_03.png"
import d4 from "../Assets/sprites/dog_04.png"
import d5 from "../Assets/sprites/dog_05.png"
import d6 from "../Assets/sprites/dog_06.png"
import d7 from "../Assets/sprites/dog_07.png"
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

const DogSprite = ({ x = width/1.15, y =height/3.5, ...props }) => {
  const bind = useDrag({ x, y });
  const dog = [];
  
        dog[0] = d1;
        dog[1] = d7;
        dog[2] = d1;
        dog[3] = d1;
        dog[4] = d7;
        dog[5] = d2;
        dog[6] = d3;
        dog[7] = d4;
        dog[8] = d5;
        dog[9] = d6;
        dog[10] = d5;
        dog[11] = d6;
        dog[12] = d1;
        dog[13] = d7;
        dog[14] = d1;
        dog[15] = d1;
        dog[16] = d7;
        


       
  return (


  
    <AnimatedSprite
      width={width/5} 
      height={height/3}
      images={dog}
      isPlaying={true}
      initialFrame={0}
      animationSpeed={0.06}
      buttonMode
      {...bind}
      {...props}
    />
  

  )
  };
export default DogSprite;
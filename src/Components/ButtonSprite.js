import {AnimatedSprite, Container, render} from '@inlet/react-pixi'
import {useState, useCallback,  useEffect, useRef, memo} from 'react'
import b0 from "../Assets/pblink1.png"
import b1 from "../Assets/pblink2.png"
import b2 from "../Assets/pblink3.png"
import b3 from "../Assets/pblink4.png"
import b4 from "../Assets/pblink5.png"
import b5 from "../Assets/pblink6.png"
import * as PIXI from 'pixi.js'

const [width,height] = [window.innerWidth,window.innerHeight];
let blink = [];

blink[0] = b0;
blink[1] = b1;
blink[2] = b2;
blink[3] = b3;
blink[4] = b4;



const useDrag = ({ x, y }) => {
  
  const sprite = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x, y });
  

  const onDown = useCallback(() => setIsDragging(true),console.log("click"),blink.push(b5),console.log(blink),
  setTimeout(() =>{blink.pop()}, 1000), []);
  const onUp = useCallback(() => setIsDragging(false),console.log('up'),console.log(blink), []);
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
   
    alpha: isDragging ? 1 : 1,
    width: width/3, 
    height: height/2,
    
    position,
  };
};










const ButtonSprite = ({ x = width/8.5, y =height/1.30, ...props }) => {


 
  const bind = useDrag({ x, y });
 
  
        
      
  return (



    <AnimatedSprite
    
    
    images={blink}
    isPlaying={true}
    initialFrame={0}
    animationSpeed={0.15}
    {...bind}
    {...props}

    buttonMode
    anchor={0.5}

     
   
  />


  )
  };
export default ButtonSprite ;
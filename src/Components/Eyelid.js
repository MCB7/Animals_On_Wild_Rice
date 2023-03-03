
import {AnimatedSprite} from '@inlet/react-pixi'
import useWindowSize from '../Components/TrueResize.js'

import b0 from "../Assets/blink0.png"
import b1 from "../Assets/blink1.png"
import b2 from "../Assets/blink2.png"
import b3 from "../Assets/blink3.png"
import b4 from "../Assets/blink4.png"
import b5 from "../Assets/blink5.png"

import * as PIXI from 'pixi.js'


PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST



const BlinkSprite = () => {

  
  const [width, height] = useWindowSize();
  const blink = [];

        blink[0] = b0;
        blink[1] = b1;
        blink[2] = b2;
        blink[3] = b3;
        blink[4] = b4;
        blink[5] = b5;
        blink[6] = b4;
        blink[7] = b3;
        blink[8] = b2;
        blink[9] = b1;
        blink[10] = b0;
        blink[11] = b0;
        blink[12] = b0;
        blink[13] = b0;
        blink[14] = b0;
      
  
      
      
        


       
  return (


  
    <AnimatedSprite
      width={width/7} 
      height={height/4.5}
      x={width/1.7}
      y={height/3.4}
      images={blink}
      isPlaying={true}
      initialFrame={0}
      animationSpeed={0.15}
     
    />
  

  )
  };
export default BlinkSprite ;
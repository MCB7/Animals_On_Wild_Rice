import { Stage, withFilters, Container, Sprite, useTick, useApp } from '@inlet/react-pixi'
import {useState, useCallback, useEffect, useRef, useMemo, useReducer} from 'react'
import {render} from 'react-dom'
import React from "react";
import useWindowSize from '../Components/TrueResize.js'

import pewpull from "../Assets/pupil1.png"
import * as PIXI from 'pixi.js'

const width = window.innerWidth
const height = window.innerHeight
const backgroundColor = 0x1d2330;
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;




const Filters = withFilters(Container, {
  displacement: PIXI.filters.DisplacementFilter
});

const config = {
  displacement: {
    x: 1,
    y: 1
  }
};

const Bunny = ({ config }) => {
  const [widthResize, heightResize] = useWindowSize();
  const displacementSpriteRef = React.useRef();


  const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const setFromEvent = (e) => setPosition({ x: (window.innerWidth / 7 - e.clientX) /70, y: (window.innerHeight / 6 - e.clientY) /60 });
      window.addEventListener("pointermove",   setFromEvent);
  
      return () => {
        window.removeEventListener("pointermove", setFromEvent);
      };
    }, []);
  
    return position;
  };
  const position = useMousePosition();

  function rotateToPoint(mx, my, px, py){
    var self = this;
    var dist_Y = my - py;
    var dist_X = mx - px;
    var angle = Math.atan2(dist_Y,dist_X);
    var degrees = angle * 360/ Math.PI;
    return angle;
      }

     

     
    
  

   const usePupilPosition = () => {
    const [pupilposition, setPupilPosition] = useState();
  
    useEffect(() => {
      const setFromEvent1 = (e) => setPupilPosition (rotateToPoint(width / 1, height / 2, e.clientX, e.clientY ));
      window.addEventListener("pointermove",   setFromEvent1);
  
      return () => {
        window.removeEventListener("pointermove", setFromEvent1);
      };
    }, []);
  
    return pupilposition;
  };
  const pupilposition = usePupilPosition();
  
  return (
    <>
      

     
     
      
          <Sprite
            anchor={.85}
            
            x={widthResize / 1.53}
            y={heightResize / 1.70}
            width={widthResize/ 25 }
            height={heightResize/ 20 }
            image={pewpull}
            rotation= {pupilposition}
          />
        
     
    </>
  );
};

const PupilMobile = () => {
  const [displacementConfig, setDisplacementConfig] = React.useState(
    config.displacement
  );

  




  return (

      <Bunny config={displacementConfig} />
  
  );
};
export default PupilMobile;
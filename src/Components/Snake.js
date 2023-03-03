import { Stage, withFilters, Container, Sprite, useTick, useApp, SimpleRope,Graphics, } from '@inlet/react-pixi'
import {useState, useCallback, useEffect, useRef, useMemo, useReducer} from 'react'
import {render} from 'react-dom'
import React from "react";
import useWindowSize from '../Components/TrueResize.js'

import tentacle from "../Assets/tentacle.png"
import * as PIXI from 'pixi.js'






const pointCount = 25;
const ropeLength = 1000 / pointCount;





const Snake = () => {

  

  const [width, height] = useWindowSize();
  const i = useRef(0);


  
  const initialPoints = useMemo(() => {
   

    
    
    const points = [];
    for (let i = 0; i < 20; i++) points.push(new PIXI.Point(i * ropeLength, 0));

    
    return points;
  }, []);
  
  
  const [points, setPoints] = useState(initialPoints);
  
  useTick(delta => {
    const iter = i.current += 0.1 * delta;
    const np = [...points];
      
    for (let j = 0; j < np.length; j++) {
      np[j].x = j * ropeLength + Math.cos((j * 0.3) + iter) * 20;
      np[j].y = Math.sin((j * 0.5) + iter) * 30;
    }
    
    setPoints(np);
  });


  
  return (
    <Container 
      interactive={true} >
        <SimpleRope
          image={tentacle}
          points={points}
          angle={20}
          mass={25}
          acceleration={points}
            height={height/1.5}
            width ={width/1.5}
          x={width/1.55}
          y={height/1.25}
   
          
          
      
          
        />
     
    </Container>
  );
}

const Tentacle = () => {
  
  
  return (
   
      <Snake />

  );
};

export default Tentacle;


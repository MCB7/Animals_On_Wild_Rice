import { Sprite, useTick, Container, withFilters } from '@inlet/react-pixi'
import React, { useState} from 'react'
import WildShine from '../Assets/WildShine.png'
import * as PIXI from 'pixi.js'


const RotatingBunny = () => {

    const Filters = withFilters
    (Container, 
    { matrix: PIXI.filters.ColorMatrixFilter,})
  
  const width = window.innerWidth
  const height = window.innerHeight
  const [rotation, setRotation] = useState(0);
  
  
  useTick((delta) => delta && setRotation(rotation + 0.01 / delta));
 
 





  return (
    <Filters matrix={{ enabled: true }} apply={ ({ matrix }) => matrix.lsd() } width={width} height={height} >
    <Sprite image={WildShine} 
    x={width/3} 
    y={height/2} 
    width={width/2} 
    height={height/1.5} 
    rotation={rotation} 
    anchor={0.5}
  
 
   
    />
   
    </Filters>
  );
};

export default RotatingBunny;

import { TilingSprite, useTick, Container } from '@inlet/react-pixi'
import React, { useState, useRef, useEffect} from 'react'
import useWindowSize from '../Components/TrueResize.js'

import bg3 from '../Assets/03_kelly.png'


const LoginBackgroundStageLayer3 = () => {
  const [w, h] = useWindowSize();

  const [{ tilePosition }, setTile] = useState({

    tilePosition: { x: 0, y: 0 }
  });

const i = useRef(0);

  useTick((delta) => {
    i.current += delta * 0.005;

    setTile(({ tilePosition }) => ({
    
      tilePosition: {
        x: tilePosition.x - 3.65 ,
        y: tilePosition.y - 4.25
      }
    }));
  });

return (
  
    
 
            
  <Container
  width={ w}
  height={h}
  x={0}
  y={0}>
 
            
        <TilingSprite
        image={bg3}
        width={ 1200}
        height={600}
        x={0}
        y={0}
        tilePosition={tilePosition}
        />
      
 </Container>
      
 
);
};
  
  
  
  
  
    export default  LoginBackgroundStageLayer3;
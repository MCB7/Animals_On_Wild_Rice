import { TilingSprite, useTick, Container } from '@inlet/react-pixi'
import React, { useState, useRef, useEffect} from 'react'
import useWindowSize from '../Components/TrueResize.js'

import bg2 from '../Assets/02_turquoise.png'

const LoginBackgroundStageLayer2 = () => {
  const [w, h] = useWindowSize();

  const [{ tilePosition }, setTile] = useState({

    tilePosition: { x: 0, y: 0 }
  });

const i = useRef(0);

  useTick((delta) => {
    i.current += delta * 0.005;

    setTile(({ tilePosition }) => ({
    
      tilePosition: {
        x: tilePosition.x + 2.65 ,
        y: tilePosition.y - 3.25
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
        image={bg2}
        width={ 1200}
        height={600}
        x={0}
        y={0}
        tilePosition={tilePosition}
        />
      
 </Container>
      
 
);
};
  
  
  
    export default  LoginBackgroundStageLayer2;
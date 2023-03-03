import { TilingSprite, useTick, Container } from '@inlet/react-pixi'
import React, { useState, useRef, useEffect} from 'react'
import useWindowSize from '../Components/TrueResize.js'

import bg8 from '../Assets/08_eggplant.png'




const LoginBackgroundStageLayer8 = () => {
  const [w, h] = useWindowSize();
    const [{ tilePosition }, setTile] = useState({
      
      tilePosition: { x: 0, y: 0 }
    });
  
  const i = useRef(0);
  
    useTick((delta) => {
      i.current += delta * 0.005;
  
      setTile(({ tilePosition }) => ({
      
        tilePosition: {
          x: tilePosition.x - 3.25 ,
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
          image={bg8}
          width={ 1200}
          height={600}
          x={0}
          y={0}
          tilePosition={tilePosition}
          />
        
   </Container>
        
   
  );
  };
  
  
  
  
  
    export default  LoginBackgroundStageLayer8;
import { TilingSprite, useTick, Container } from '@inlet/react-pixi'
import React, { useState, useRef, useEffect} from 'react'
import bg2 from '../Assets/movebg2.png'
import useWindowSize from '../Components/TrueResize.js'


const TitleBackgroundStageLayer2 = () => {
    const [width, height] = useWindowSize();
    const [{ tilePosition }, setTile] = useState({
  
      tilePosition: { x: 0, y: 0 }
    });
  
  const i = useRef(0);
  
    useTick((delta) => {
      i.current += delta * 0.005;
  
      setTile(({ tilePosition }) => ({
      
        tilePosition: {
          x: tilePosition.x - .25,
          y: tilePosition.y 
        }
      }));
    });

  return (
    
      
   
              
    <Container
    width={ width}
    height={height}
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
  
  
  
  
  
    export default  TitleBackgroundStageLayer2;
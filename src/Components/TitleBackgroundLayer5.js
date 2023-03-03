import { TilingSprite,Sprite, useTick,Container  } from '@inlet/react-pixi'
import React, { useState, useRef, useEffect} from 'react'
import useWindowSize from '../Components/TrueResize.js'
import '../App.css';
import bg5 from '../Assets/movebg5.png'



const TitleBackgroundStageLayer5 = () => {
  const [width, height] = useWindowSize();
  const [{ tilePosition }, setTile] = useState({

    tilePosition: { x: 0, y: 0}
  });

const i = useRef(0);

  useTick((delta) => {
    i.current += delta * 0.005;

    setTile(({ tilePosition }) => ({
    
      tilePosition: {
        x: tilePosition.x - 1,
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
        
        image={bg5}
        width={ 1200}
        height={600}
        x={0}
        y={0}
        
        tilePosition={tilePosition}
      
       
      
        />
      
      </Container>
);
};





  export default  TitleBackgroundStageLayer5;
  
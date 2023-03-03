import { TilingSprite,Sprite, useTick } from '@inlet/react-pixi'
import React, { useState, useRef, useEffect} from 'react'
import useWindowSize from '../Components/TrueResize.js'

import '../App.css';


import bg5 from '../Assets/limetile.png'



const UserBackground = () => {
  const [width, height] = useWindowSize();
  const [{ tilePosition }, setTile] = useState({

    tilePosition: { x: 0, y: 0}
  });

  
const i = useRef(0);

  useTick((delta) => {
    i.current += delta * 0.005;

    setTile(({ tilePosition }) => ({
    
      tilePosition: {
        x: tilePosition.x + 1.25,
        y: tilePosition.y + 1.25
      }
    }));
  });







 

return (
  
    
        
            
        <TilingSprite
        
        image={bg5}
        width={ width}
        height={height}
        x={0}
        y={0}
        
        tilePosition={tilePosition}
      
       
      
        />
      
    
);
};





  export default  UserBackground;
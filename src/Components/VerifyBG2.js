
import { TilingSprite,Sprite, useTick } from '@inlet/react-pixi'
import React, { useState, useRef, useEffect} from 'react'
import '../App.css';
import bg5 from '../Assets/VerifyBG2.png'
const w = window.screen.innerWidth
const h = window.screen.innerHeight

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const VerifyBackground = () => {
  const [{ tilePosition }, setTile] = useState({

    tilePosition: { x: 0, y: 0}
  });

const i = useRef(0);

  useTick((delta) => {
    i.current += delta * 0.005;

    setTile(({ tilePosition }) => ({
    
      tilePosition: {
        x: tilePosition.x + .50,
        y: tilePosition.y + .50
      }
    }));
  });



  const { width, height } = useWindowDimensions();



 

return (
  
    
        
            
        <TilingSprite
        
        image={bg5}
        width={ width}
        height={height*2}
        x={0}
        y={0}
        
        tilePosition={tilePosition}
      
       
      
        />
      
    
);
};
export default VerifyBackground;
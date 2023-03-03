import {useState, Component,useRef} from 'react'
import { TilingSprite,Container ,useTick} from '@inlet/react-pixi'
import foreground from '../Assets/bggallery5.png'
import useWindowSize from '../Components/TrueResize.js'
const w = window.innerWidth
const h = window.innerHeight


const bg1 = foreground

const BackGround5 = () => {
  const [w, h] = useWindowSize();

  const [{ tilePosition }, setTile] = useState({

    tilePosition: { x: 0, y: 0 }
  });

const i = useRef(0);

  useTick((delta) => {
    i.current += delta * 0.005;

    setTile(({ tilePosition }) => ({
    
      tilePosition: {
        x: tilePosition.x + .75 ,
        y: tilePosition.y 
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
        image={bg1}
        width={ 1200}
        height={600}
        x={0}
        y={0}
        tilePosition={tilePosition}
        />
      
 </Container>
      
 
);
};

export default BackGround5
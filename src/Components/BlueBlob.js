import React from "react";
import ReactDOM from "react-dom";
import { Stage, Sprite, NineSlicePlane, AppConsumer, Container } from "@inlet/react-pixi";

import blueblob from '../Assets/dblublob.png'
import * as PIXI from 'pixi.js'
import useWindowSize from '../Components/TrueResize.js'



const w = window.innerWidth
const h = window.innerHeight



  


const BlueBlob = function () {
  const [w, h] = useWindowSize();
    const onDragStart = function (event) {
        const sprite = event.currentTarget;
        sprite.data = event.data;
    
        const newPosition2 = sprite.data.getLocalPosition(sprite.parent);
        sprite.x = newPosition2.x / Math.sin(2.24, Math.random() / 3.5);
        sprite.y = newPosition2.y / Math.sin(2.56, Math.random() / 3.5);
        sprite.rotation = newPosition2.y  / 15;
        sprite.scale.x = newPosition2.x  / 600;
        sprite.scale.y = newPosition2.x  / 600;
    };
    

return (
   
    
  <Sprite
    image={blueblob}
    x={-100}
    y={-100}
    width={w/12}
    height={h/10}
    anchor={0.5}
    interactive
    
    pointermove={onDragStart}
    

  />
  


);
};
export default BlueBlob;
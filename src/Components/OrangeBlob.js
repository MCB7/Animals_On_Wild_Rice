import React from "react";
import ReactDOM from "react-dom";
import { Stage, Sprite, NineSlicePlane, AppConsumer, Container } from "@inlet/react-pixi";

import Orangeblob from '../Assets/orangeblob.png'
import * as PIXI from 'pixi.js'
import useWindowSize from '../Components/TrueResize.js'





const w = window.innerWidth
const h = window.innerHeight


  


const OrangeBlob = function () {
  const [w, h] = useWindowSize();
    const onDragStart = function (event) {
        const sprite = event.currentTarget;
        sprite.data = event.data;
    
        const newPosition2 = sprite.data.getLocalPosition(sprite.parent);
        sprite.x = newPosition2.x / Math.sin(2.55, Math.random() / 1);
        sprite.y = newPosition2.y / Math.sin(2.75, Math.random() / 1.5);
        sprite.rotation = newPosition2.y  * 2;
        sprite.scale.x = newPosition2.x  / 600;
        sprite.scale.y = newPosition2.x  / 600;
    };
    

return (
   
    
  <Sprite
    image={Orangeblob}
    x={-100}
    y={-100}
    width={w/15}
    height={h/15}
    
    anchor={0.5}
    interactive
    
    pointermove={onDragStart}
    

  />
  


);
};
export default OrangeBlob;
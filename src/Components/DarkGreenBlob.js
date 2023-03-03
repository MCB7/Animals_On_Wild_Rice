import React from "react";
import ReactDOM from "react-dom";
import { Stage, Sprite, NineSlicePlane, AppConsumer, Container,  useTick  } from "@inlet/react-pixi";
import {useState} from 'react'
import greenblob from '../Assets/dgreeblob.png'
import * as PIXI from 'pixi.js'
import useWindowSize from '../Components/TrueResize.js'

let i = 0;
const w = window.innerWidth
const h = window.innerHeight

  


const AppDrag = function () {
  const [w, h] = useWindowSize();
  

    const onDragStart = function (event) {
        const sprite = event.currentTarget;
        sprite.data = event.data;
    
        const newPosition2 = sprite.data.getLocalPosition(sprite.parent);
        sprite.x = newPosition2.x * Math.sin(1, Math.random() * 4);
        sprite.y = newPosition2.y * Math.sin(1, Math.random() * 4);
        sprite.rotation = newPosition2.y  / 100;
        sprite.scale.x = newPosition2.x  / 800;
        sprite.scale.y = newPosition2.x  / 800;
    };
    





return (
   
    
  <Sprite
    image={greenblob}
    x={-100}
    y={-100}
    width={w/7}
    height={h/5}
    anchor={0.5}
    interactive
    rotation
   
    pointermove={onDragStart}
    

  />
  


);
};
export default AppDrag;
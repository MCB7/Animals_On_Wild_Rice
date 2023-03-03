import '../App.css';
import React, { useState } from 'react';
import { Stage, Container, Sprite, Provider } from '@inlet/react-pixi'
import AppDrag from './DarkGreenBlob.js'
import BlueBlob from './BlueBlob.js'
import LightBlueBlob from './LightBlueBlob.js'
import LightGreenBlob from './LightGreenBlob.js'
import PurpleBlob from './PurpleBlob.js'
import PinkBlob from './PinkBlob.js'
import OrangeBlob from './OrangeBlob.js'
import YellowBlob from './YellowBlob.js'
import AppMobile from './MonkeyBMobile'
import PupilMobile from './PupilMobile'
import Tentacle from './Snake'
import BlinkSpriteMobile from './EyelidMobile'
import LoginBackgroundStageLayer1 from './LoginBackgroundLayer1'
import LoginBackgroundStageLayer2 from './LoginBackgroundLayer2'
import LoginBackgroundStageLayer3 from './LoginBackgroundLayer3'
import LoginBackgroundStageLayer4 from './LoginBackgroundLayer4'
import LoginBackgroundStageLayer5 from './LoginBackgroundLayer5'
import LoginBackgroundStageLayer6 from './LoginBackgroundLayer6'
import LoginBackgroundStageLayer7 from './LoginBackgroundLayer7'
import LoginBackgroundStageLayer8 from './LoginBackgroundLayer8'


function LoginMobile() {

  const width = window.innerWidth
  const height = window.innerHeight
  const stageProps = {
    height,
    width,
    options: {
      backgroundColor: 0xffffff,
      antialias: true,
      interactive: true
      
    },
  }

  //window.onresize = function(){ window.location.reload(); }
  return (
   
                         
  <div className="pupil-mobile-static-image ">
  <Stage{...stageProps}>
  

 
  < LoginBackgroundStageLayer6   />
  < LoginBackgroundStageLayer4   />
  < LoginBackgroundStageLayer5   />
  < LoginBackgroundStageLayer7   />
  < LoginBackgroundStageLayer3   />
  < LoginBackgroundStageLayer8  />
  < LoginBackgroundStageLayer1   />
  < LoginBackgroundStageLayer2   />

 
  <LightBlueBlob />
  <YellowBlob />
  <OrangeBlob/>
  <BlueBlob/>
  <AppMobile />
  <PupilMobile />
  <BlinkSpriteMobile/>
  <Tentacle />
  <AppDrag />
  <PurpleBlob/>
  <LightGreenBlob/>
  <PinkBlob/>
  
  
  
  
  
  </Stage>

  
  </div>
     
  

  )}

export default LoginMobile;

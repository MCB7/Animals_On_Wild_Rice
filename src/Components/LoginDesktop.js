import '../App.css';

import { Stage, Container, Sprite, Provider } from '@inlet/react-pixi'
import AppDrag from './DarkGreenBlob.js'
import BlueBlob from './BlueBlob.js'
import LightBlueBlob from './LightBlueBlob.js'
import LightGreenBlob from './LightGreenBlob.js'
import PurpleBlob from './PurpleBlob.js'
import PinkBlob from './PinkBlob.js'
import OrangeBlob from './OrangeBlob.js'
import YellowBlob from './YellowBlob.js'
import AppMobile from './MonkeyB'
import PupilMobile from './Pupil'
import Tentacle from './Snake'
import BlinkSpriteMobile from './Eyelid'
import LoginBackgroundStageLayer1 from './LoginBackgroundLayer1'
import LoginBackgroundStageLayer2 from './LoginBackgroundLayer2'
import LoginBackgroundStageLayer3 from './LoginBackgroundLayer3'
import LoginBackgroundStageLayer4 from './LoginBackgroundLayer4'
import LoginBackgroundStageLayer5 from './LoginBackgroundLayer5'
import LoginBackgroundStageLayer6 from './LoginBackgroundLayer6'
import LoginBackgroundStageLayer7 from './LoginBackgroundLayer7'
import LoginBackgroundStageLayer8 from './LoginBackgroundLayer8'

import useWindowSize from '../Components/TrueResize.js'
import React, { useLayoutEffect, useState } from 'react';





function LoginDesktop(props) {
  const [width, height] = useWindowSize();
  


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
  
  <Container x={0} y={0} width={width} height={height}>
 
  < LoginBackgroundStageLayer6   />
  < LoginBackgroundStageLayer4   />
  < LoginBackgroundStageLayer5   />
  < LoginBackgroundStageLayer7   />
  < LoginBackgroundStageLayer3   />
  < LoginBackgroundStageLayer8  />
  < LoginBackgroundStageLayer1   />
  < LoginBackgroundStageLayer2   />

  </Container>
 
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

export default LoginDesktop;

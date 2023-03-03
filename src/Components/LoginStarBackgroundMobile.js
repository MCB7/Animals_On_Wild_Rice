import {useState, Component} from 'react'
import { Stage, AppConsumer, TilingSprite } from '@inlet/react-pixi'
import useWindowSize from '../Components/TrueOuterResize.js'

import LoginBackground from './LoginBackground'


const w = window.innerWidth
const h = window.innerHeight




function LoginStarBackground(){

  const [width, height] = useWindowSize();

  return(

    <Stage width={width} height={height} options={{ autoDensity: true, backgroundColor: 0x78C5D6 }}>

       <Container width={width} height={height} >
    <LoginBackground/>
         
    </Container >
  </Stage>


     
  
  )
}

export default LoginStarBackground
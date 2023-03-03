import {useState, Component} from 'react'
import { Stage, AppConsumer, TilingSprite, Container } from '@inlet/react-pixi'
import useWindowSize from '../Components/TrueResize.js'

import BackGround0 from './RegisterBg0'

import BackGround1 from './RegisterBg1'

const w = window.innerWidth
const h = window.innerHeight




function RegisterBackground(){

  const [width, height] = useWindowSize();

  return(

    <Stage width={width} height={height} options={{ autoDensity: true, backgroundColor: 0x78C5D6 }}>
        <Container width={width} height={height}>
        <BackGround0 />
        <BackGround1 />
        </Container>
         

  </Stage>


     
  
  )
}

export default RegisterBackground
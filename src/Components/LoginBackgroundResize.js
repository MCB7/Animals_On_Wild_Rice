import {useState, Component} from 'react'
import { Stage, AppConsumer, TilingSprite, Container } from '@inlet/react-pixi'
import background from '../Assets/signupbg.png'
import useWindowSize from '../Components/TrueResize.js'
import LoginBackground from '../Components/LoginBackground'


export default function LoginBackgroundResize () {
    
  const [width, height] = useWindowSize();
  return (
    <Container width={width} height={height}>
    <LoginBackground/>
    </Container>
  )
}
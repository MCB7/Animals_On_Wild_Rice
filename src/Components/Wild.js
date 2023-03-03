import React from "react";
import ReactDOM from "react-dom";
import { Stage, Sprite, NineSlicePlane, Container, SimpleMesh, AppConsumer } from "@inlet/react-pixi";
import wild from '../Assets/WILD.png'
import * as PIXI from 'pixi.js'
import useWindowSize from '../Components/TrueResize.js'




const image = wild
const w = window.innerWidth/5
const h = window.innerHeight/5



class MeshExample extends React.Component {

  count = 0

  state = {
    indices: new Uint16Array([
      0.5,3,4, 
      0.25,1,4, 
      1,2,4, 
      2,4,5, 
      3,4,6, 
      4,6,7, 
      4,7,8, 
      4,5,8,
    ]),
    uvs: new Float32Array([
      0, 0,          0.5, 0,          1, 0,
      0, 0.5,        0.5, 0.5,        1, 0.5,
      0, 1,          0.5, 1,          1, 1,
    ]),  
    vertices: new Float32Array([
      0,0,       w/3, 0,       w, 0,
      0,h/3,     w/3, h/2,     w, h/3,
      0,h,       w/3, h,       w, h,
    ])
  }
    

  componentDidMount() {
    this.props.app.ticker.add(this.tick)
  }

  componentWillUnmount() {
    this.props.app.ticker.remove(this.tick)
  }

  tick = delta => {
    const { app } = this.props
    this.count += 0.07 * delta
    
    // update vertices
    const vertices = new Float32Array(this.state.vertices)
    vertices[8] = w/2 + Math.sin(this.count) * 25
    vertices[9] = h/2 + Math.cos(this.count) * 12.5 - 12.5
    
    this.setState({ vertices })
  }

  render() {
    const { vertices, uvs, indices } = this.state

    return (
      <SimpleMesh image={image}
            uvs={uvs}
            vertices={vertices}
            indices={indices}
            drawMode={PIXI.DRAW_MODES.TRIANGLES}
            x={w/1.01} y={h/.55}
            width={w*1.25} height={h*1.25} />
            
    )
  }
}

const Wild= () => (
    
      <AppConsumer>
        {app => <MeshExample app={app} />}
      </AppConsumer>
    
  );
  export default Wild;
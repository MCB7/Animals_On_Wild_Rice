import {useState, Component} from 'react'
import { Stage, AppConsumer, TilingSprite, Container } from '@inlet/react-pixi'


import hills from '../Assets/bggallery1.png'

import useWindowSize from '../Components/TrueResize.js'

const w = window.innerWidth
const h = window.innerHeight



const bg1 = hills

class Tiling extends Component {
  count = 0;

  state = {
    tileScale: { x: 1, y: 0 },
    tilePosition: { x: 0, y: -1 }
  };

  componentDidMount() {
    this.props.app.ticker.add(this.tick);
  }

  componentWillUnmount() {
    this.props.app.ticker.remove(this.tick);
  }

  tick = delta => {
    this.count += 0.005 * delta;

    this.setState(state => ({
      tileScale: {
        x: 2 ,
        y: 1,
      },
      tilePosition: {
        x: state.tilePosition.x + .25,
        y: state.tilePosition.y 
      }
    }));
  };

  render() {
    return (

                   

      <TilingSprite
        image={bg1}
        width={w}
        height={h}
        tilePosition={this.state.tilePosition}
        tileScale={this.state.tileScale}
      />

    );
  }
}



function BackGround1(){
  const [width, height] = useWindowSize();


  return(

    <Container width={width} height={height} >
    <AppConsumer>
      { app => <Tiling width={width} height={height} app={app} />}
    </AppConsumer>
 
    </Container>

     
  
  )
}

export default BackGround1
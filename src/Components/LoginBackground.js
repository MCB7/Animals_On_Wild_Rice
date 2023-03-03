import {useState, Component} from 'react'
import { Stage, AppConsumer, TilingSprite, Container } from '@inlet/react-pixi'
import background from '../Assets/signupbg.png'
import useWindowSize from '../Components/TrueResize.js'
const w = window.innerWidth
const h = window.outerHeight


const pattern = background

class Tiling extends Component {
  
  count = 0;

  state = {
    tileScale: { x: 1, y: 1 },
    tilePosition: { x: 0, y: 0 }
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
        x: 2 + Math.sin(this.count),
        y: 2 + Math.cos(this.count)
      },
      tilePosition: {
        x: state.tilePosition.x + 1,
        y: state.tilePosition.y + 1
      }
    }));
  };

  render() {
   

    return (
      
      <TilingSprite
        image={pattern}
        width={w}
        height={h}
        tilePosition={this.state.tilePosition}
        tileScale={this.state.tileScale}
      />
  
    );
  }
}



function LoginBackground(){

  const [width, height] = useWindowSize();

  return(

    
    <AppConsumer >
      { app => <Tiling  width={width} height={height} app={app} />}
    </AppConsumer>



     
  
  )
}

export default LoginBackground
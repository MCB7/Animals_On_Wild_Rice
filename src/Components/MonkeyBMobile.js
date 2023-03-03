
import { Stage, withFilters, Container, Sprite, useTick } from '@inlet/react-pixi'
import {useState, useCallback, useEffect, useRef, useMemo} from 'react'
import {render} from 'react-dom'
import React from "react";
import useWindowSize from '../Components/TrueResize.js'

import Dis from "../Assets/BW.png"
import MB from "../Assets/MB1.png"
import * as PIXI from 'pixi.js'


const backgroundColor = 0x1d2330;
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;




const Filters = withFilters(Container, {
  displacement: PIXI.filters.DisplacementFilter
});

const config = {
  displacement: {
    x: 1,
    y: 1
  }
};

const Bunny = ({ config }) => {
  const [width, height] = useWindowSize();
  const displacementSpriteRef = React.useRef();
  const [renderFilter, setRenderFilter] = React.useState(false);

  React.useEffect(() => {
    displacementSpriteRef.current.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    setRenderFilter(true);
  }, []);

  const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const setFromEvent = (e) => setPosition({ x: (window.innerWidth / 7 - e.clientX) /70, y: (window.innerHeight / 6 - e.clientY) /60 });
      window.addEventListener("pointermove",   setFromEvent);
  
      return () => {
        window.removeEventListener("pointermove", setFromEvent);
      };
    }, []);
  
    return position;
  };
  const position = useMousePosition();
  return (
    <>
      

      <Sprite
        {...config}
        anchor={0.5}
        scale={1}
        x={width / 2}
        y={height /1.5}
        width={width }
        height={height/1.5 }
        image={Dis}
        ref={displacementSpriteRef}
      />
      {renderFilter && (
        <Filters
          displacement={{
            construct: [displacementSpriteRef.current],
            scale: { x: position.x, y: position.y }
          }}
        >
          <Sprite
            anchor={0.5}
            scale={1}
            x={width / 2}
            y={height /1.5}
            width={width }
            height={height/1.5 }
            image={MB}
          />
        </Filters>
      )}
    </>
  );
};

const AppMobile = () => {
  const [displacementConfig, setDisplacementConfig] = React.useState(
    config.displacement
  );

  




  return (

      <Bunny config={displacementConfig} />
  
  );
};
export default AppMobile;
  
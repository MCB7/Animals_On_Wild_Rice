
import { Stage, withFilters, Container, Sprite, useTick } from '@inlet/react-pixi'
import {useState, useCallback, useEffect, useRef, useMemo} from 'react'
import {render} from 'react-dom'
import React from "react";

import Dis from "../Assets/BW.png"
import MB from "../Assets/MB1.png"
import * as PIXI from 'pixi.js'

const width = window.innerWidth
const height = window.innerHeight
const backgroundColor = 0x1d2330;

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const displacementFilter = Dis;
const monkey = MB;

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};

const Filters = withFilters(Container, {
  displacement: PIXI.filters.DisplacementFilter
});


const Displacement = () => {
  const position = useMousePosition();

  return(
    <Filters scale={position}>
      <Sprite image= {Dis} />
    </Filters>
  )
  };

export default Displacement;
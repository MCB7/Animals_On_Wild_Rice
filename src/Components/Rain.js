import { Stage, PixiComponent, Container } from '@inlet/react-pixi'
import React from 'react'
import * as PIXI from 'pixi.js';
import * as particles from 'pixi-particles'
import star from '../Assets/star.png'
import useWindowSize from '../Components/TrueResize.js'



const img = star;

const emitterConfig = {
  alpha: {
    start: 1,
    end: 1
  },
  scale: {
    start: .090,
    end: .08
  },
  color: {
    start: "ffffff",
    end: "ffffff"
  },
  speed: {
    start: 500,
    end: 1000
  },
  startRotation: {
    min: 65,
    max: 180
  },
  rotationSpeed: {
    min: 0,
    max: 10
  },
  lifetime: {
    min: 0.81,
    max: 0.81
  },
  blendMode: "normal",
  frequency: 0.04,
  emitterLifetime: 0,
  maxParticles:200,
  pos: {
    x: 0,
    y: 0
  },
  addAtBack: false,
  spawnType: "rect",
  spawnRect: {
    x: 0,
    y: 0,
    w: 2000,
    h: 500
  }
};

const Emitter = PixiComponent("Emitter", {
  create() {
    return new PIXI.Container();
  },
  applyProps(instance, oldProps, newProps) {
    const { image, config } = newProps;

    if (!this._emitter) {
      this._emitter = new particles.Emitter(
        instance,
        [PIXI.Texture.from(image)],
        config
      );

      let elapsed = Date.now();

      const t = () => {
        this._emitter.raf = requestAnimationFrame(t);
        const now = Date.now();

        this._emitter.update((now - elapsed) * 0.001);

        elapsed = now;
      };

      this._emitter.emit = true;
      t();
    }
  },
  willUnmount() {
    if (this._emitter) {
      this._emitter.emit = false;
      cancelAnimationFrame(this._emitter.raf);
    }
  }
});

const Rain = () => {
    const [width, height] = useWindowSize();

    return (
  
    <Emitter width={width} height={height} image={img} config={emitterConfig} />

    )
    };

export default Rain;

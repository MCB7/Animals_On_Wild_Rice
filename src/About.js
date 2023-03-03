import React, {useRef, useState} from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { AnimatePresence, motion, useCycle } from "framer-motion";
import './About-styles.css'
import Spritesheet from 'react-responsive-spritesheet';
import MB from './Assets/monkeybuttquestionmark.png'
import MAKE from './Assets/spritemapmake.png'
import LOG from './Assets/loginbeaver-min.png'
import SEND from './Assets/messagemachine-min.png'
import FRAME from './Assets/AOWRframe-min.png'
import ARROW from './Assets/arrow.png'
import burger from './Assets/burger.png'
import close from './Assets/closeIconSpritemap.png'

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "Login", to: "/login", id: 2 },
  { name: "Gallery", to: "/gallery", id: 3 },
];
const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.2,
      staggerDirection: 1,
      
    }
    
  }
};


export default function About() {
  const [open, cycleOpen] = useCycle(false, true);
  const alignCenter = { display: 'flex', alignItems: 'center' }
  const alignRight =  { display: 'flex', alignItems: 'right' }
  const ref = useRef()
  return (
    <div>
   
      <AnimatePresence>
        
      {open && (
        <motion.aside
        
          initial={{ width: 0 }}
          animate={{
            width: "60vw",
            transition: { delay: 1.5, duration: 0.3 }
          }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.3 }
          }}
        >
           
          <motion.div
            className="container"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
        <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    transition={{ delay: 2 }}>
            <div className="Close-btn-home"  style={{marginLeft:'10vw', cursor:'pointer'}}>
  <Spritesheet
  image={close}
  widthFrame={116}
  heightFrame={109}
  steps={11}
  fps={30}
  autoplay={false}
  loop={false}
  isResponsive={true}
  style={{
    display: 'block',
    width: '10vw',
    cursor: 'pointer',
  }}
  onClick={Spritesheet => {
    Spritesheet.play();
    cycleOpen(open ? "Close" : "Open")
    
  }
  }
  onLoopComplete={Spritesheet => {
    Spritesheet.goToAndPause(1)
  }}
  

/>
</div>
            </motion.div>
             
            {links.map(({ name, to, id }) => (
              <motion.a
                key={id}
                href={to}
                whileHover={{ scale: 1.1 }}
                variants={itemVariants}
                
              >
                {name}

               
            
              </motion.a>
            ))}
         
          </motion.div>
          
        </motion.aside>
      )}
      
    </AnimatePresence>

<div id="fixed-div">
<motion.div initial={{ opacity: 0 , y: "-100vh", rotate: 0, scale: 0}}
                       animate={{ opacity: 1, y: "0", rotate: 360, scale: 1}}>
 <motion.div whileHover={{ scale: .85 }}>
<Spritesheet
  
  image={burger}
  widthFrame={252}
  heightFrame={244}
  steps={16}
  fps={16}
  autoplay={false}
  loop={true}
  isResponsive={true}
  style={{
    display: 'block',
    width: '10vw',
    cursor: 'pointer',
  }}
  onClick={Spritesheet => {
    Spritesheet.play();
    cycleOpen(open ? "Close" : "Open")
  }
  }
  onLoopComplete={Spritesheet => {
    Spritesheet.goToAndPause(.001)
  }}
  

/>
</motion.div>
</motion.div>

</div>

      
      <Parallax pages={22} ref={ref}>
      <motion.div initial={{ opacity: 0 , y: "-100vh", scale: 1.5}}
                       animate={{ opacity: 1, y: "0", scale: 1}}>
      <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div className={'background-image-first-section'}>
    
          </div>
          </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div className={'background-image-first-text-AOWR-section'}>
    
          </div>
         </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div className={'first-text-AOWR-0'}>
            ANIMALS<br/>ON WILD RICE
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={.02} speed={0.75} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={'first-text-AOWR-1'}>
            ANIMALS<br/>ON WILD RICE
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={.04} speed={1} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={'first-text-AOWR-2'}>
            ANIMALS<br/>ON WILD RICE
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={.06} speed={1.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div className={'first-text-AOWR-3'}>
            ANIMALS<br/>ON WILD RICE
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={.08} speed={1.75} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={'first-text-AOWR-4'}>
            ANIMALS<br/>ON WILD RICE
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={.10} speed={2} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={'first-text-AOWR-5'}>
            ANIMALS<br/>ON WILD RICE
          </p>
        </ParallaxLayer>

        <div className={'mobile-text-AOWR-container'}>

        <ParallaxLayer offset={0.50} speed={0.25} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div className={'mobile-first-text-AOWR-0'}>
            ANIMALS<br/>ON WILD RICE
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={.52} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={'mobile-first-text-AOWR-1'}>
            ANIMALS<br/>ON WILD RICE
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={.54} speed={.75} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={'mobile-first-text-AOWR-2'}>
            ANIMALS<br/>ON WILD RICE
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={.56} speed={1} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div className={'mobile-first-text-AOWR-3'}>
            ANIMALS<br/>ON WILD RICE
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={.58} speed={1.25} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={'mobile-first-text-AOWR-4'}>
            ANIMALS<br/>ON WILD RICE
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={.60} speed={1.50} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={'mobile-first-text-AOWR-5'}>
            ANIMALS<br/>ON WILD RICE
          </p>
        </ParallaxLayer>
        </div>
        </motion.div>
      
        <ParallaxLayer sticky={{ start: 1, end: 3.60 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${'card'} ${'sticky-MB'}`}>
          <Spritesheet
            image={MB}
            widthFrame={580}
            heightFrame={790}
            steps={10}
            fps={10}
            autoplay={true}
            loop={true}
            isResponsive={true}
            style={{
            display: 'block',
            width: '40vw'
              }}
            />

          </div>
        </ParallaxLayer>
            <div className={'second-text'}>
        <ParallaxLayer offset={1.5} speed={.5} style={{ ...alignRight, justifyContent: 'flex-end' }}>
        <div className= {`${'second-text-AOWR-0'} ${'parallax'}`}>
            <p>What is it?</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.52} speed={.6} style={{ ...alignRight, justifyContent: 'flex-end' }}>
        <div className= {`${'second-text-AOWR-1'} ${'parallax'}`}>
            <p>What is it?</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.54} speed={.7} style={{ ...alignRight, justifyContent: 'flex-end' }}>
        <div className= {`${'second-text-AOWR-2'} ${'parallax'}`}>
            <p>What is it?</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.56} speed={.8} style={{ ...alignRight, justifyContent: 'flex-end' }}>
        <div className= {`${'second-text-AOWR-3'} ${'parallax'}`}>
            <p>What is it?</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.58} speed={.9} style={{ ...alignRight, justifyContent: 'flex-end' }}>
          <div className= {`${'second-text-AOWR-4'} ${'parallax'}`}>
            <p>What is it?</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.60} speed={1} style={{ ...alignRight, justifyContent: 'flex-end' }}>
          <div className= {`${'second-text-AOWR-5'} ${'parallax'}`}>
            <p>What is it?</p>
          </div>
        </ParallaxLayer>
        </div>

        <ParallaxLayer offset={3.54} speed={.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax'} ${'third-text-AOWR-0'}`}>
            <p>Well...</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.56} speed={.6} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax'} ${'third-text-AOWR-1'}`}>
            <p>Well...</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.58} speed={.7} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax'} ${'third-text-AOWR-2'}`}>
            <p>Well...</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 5, end: 7.60 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${'card-MAKE'} ${'sticky-MAKE'}`}>
          <Spritesheet
            image={MAKE}
            widthFrame={539}
            heightFrame={455}
            steps={23}
            fps={10}
            autoplay={true}
            loop={true}
            isResponsive={true}
            style={{
            display: 'block',
            width: '40vw'
              }}
            />
            </div>
            </ParallaxLayer>

            <ParallaxLayer offset={5.54} speed={.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax-MAKE'} ${'third-text-AOWR-0'}`}>
            <p>FIRST YA GOTTA MAKE IT! </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5.56} speed={.6} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax-MAKE'} ${'third-text-AOWR-1'}`}>
            <p>FIRST YA GOTTA MAKE IT! </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5.58} speed={.7} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax-MAKE'} ${'third-text-AOWR-2'}`}>
            <p>FIRST YA GOTTA MAKE IT! </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={7.54} speed={.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax-MAKE'} ${'third-text-AOWR-4'}`}>
            <p>THEN... </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={7.56} speed={.6} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax-MAKE'} ${'third-text-AOWR-5'}`}>
            <p>THEN... </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={7.58} speed={.7} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax-MAKE'} ${'third-text-AOWR-6'}`}>
            <p>THEN... </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 9, end: 10.70 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${'card'} ${'sticky-LOG'}`}>
          <Spritesheet
            image={LOG}
            widthFrame={670.55}
            heightFrame={712}
            steps={17}
            fps={10}
            autoplay={true}
            loop={true}
            isResponsive={true}
            style={{
            display: 'block',
            width: '40vw'
              }}
            />
            </div>
          </ParallaxLayer>
          
        <ParallaxLayer offset={9.54} speed={.6} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax'} ${'fourth-text-AOWR-0'}`}>
            <p>LOG IN!</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={9.55} speed={.7} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax'} ${'fourth-text-AOWR-1'}`}>
            <p>LOG IN!</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={9.56} speed={.8} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax'} ${'fourth-text-AOWR-2'}`}>
            <p>LOG IN!</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={10.54} speed={.6} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax'} ${'fourth-text-AOWR-3'}`}>
            <p>After that...</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={10.55} speed={.7} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax'} ${'fourth-text-AOWR-4'}`}>
            <p>After that...</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={10.56} speed={.8} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax'} ${'fourth-text-AOWR-5'}`}>
            <p>After that...</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 12, end: 14.70 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${'card'} ${'sticky-SEND'}`}>
          <Spritesheet
            image={SEND}
            widthFrame={649.2}
            heightFrame={636}
            steps={30}
            fps={10}
            autoplay={true}
            loop={true}
            isResponsive={true}
            style={{
            display: 'block',
            width: '40vw'
              }}
            />
            </div>
            </ParallaxLayer>
            <ParallaxLayer offset={12.75} speed={.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax-MAKE'} ${'fifth-text-AOWR-0'}`}>
            <p>SEND IT!</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={12.75} speed={.6} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax-MAKE'} ${'fifth-text-AOWR-1'}`}>
            <p>SEND IT!</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={12.75} speed={.7} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax-MAKE'} ${'fifth-text-AOWR-2'}`}>
            <p>SEND IT!</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={14.50} speed={0.4} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div className={`${'parallax-MAKE'} ${'first-text-AOWR-5'}`}>
            BOOM!
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={14.51} speed={0.6} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={`${'parallax-MAKE'} ${'first-text-AOWR-2'}`}>
            BOOM!
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={14.53} speed={.8} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={`${'parallax-MAKE'} ${'first-text-AOWR-3'}`}>
            BOOM!
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={14.54} speed={1} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div className={`${'parallax-MAKE'} ${'first-text-AOWR-4'}`}>
            BOOM!
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={14.55} speed={1.2} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={`${'parallax-MAKE'} ${'first-text-AOWR-7'}`}>
            BOOM!
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={14.56} speed={1.4} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={`${'parallax-MAKE'} ${'first-text-AOWR-6'}`}>
            BOOM!
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={14.57} speed={1.6} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={`${'parallax-MAKE'} ${'first-text-AOWR-0'}`}>
            BOOM!
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={14.58} speed={1.8} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={`${'parallax-MAKE'} ${'first-text-AOWR-1'}`}>
            BOOM!
          </p>
        </ParallaxLayer>
         
        <ParallaxLayer sticky={{ start: 17, end: 18}} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
        <div className={`${'card'} ${'sticky-FRAME'}`}>
          <Spritesheet
            image={FRAME}
            widthFrame={896}
            heightFrame={914}
            steps={31}
            fps={10}
            autoplay={true}
            loop={true}
            isResponsive={true}
            style={{
            display: 'block',
            width: '40vw'
            
              }}
          
            />
            </div>
            </ParallaxLayer>
            <ParallaxLayer offset={17.85} speed={.5} style={{ ...alignCenter, justifyContent: 'flex-end' }} >
          <div className={` ${'parallax'} ${'fourth-text-AOWR-2'}`}>
            <p>YOU'RE IN!</p>
          </div>
          </ParallaxLayer>
          <ParallaxLayer offset={17.86} speed={.6} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax'} ${'third-text-AOWR-4'}`}>
            <p>YOU'RE IN!</p>
          </div>
          </ParallaxLayer>
          <ParallaxLayer offset={17.87} speed={.7} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={` ${'parallax'} ${'second-text-AOWR-1'}`}>
            <p>YOU'RE IN!</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 19, end: 22 }} speed={1} style={{ ...alignCenter, justifyContent: 'flex-start' }}  onClick={() => ref.current.scrollTo(0)}>
          <div className={`${'card'} ${'sticky-ARROW'}`}>
          <Spritesheet
            image={ARROW}
            widthFrame={237}
            heightFrame={576}
            steps={5}
            fps={10}
            autoplay={true}
            loop={true}
            isResponsive={true}
            style={{
            display: 'block',
            width: '15vw'
              }}
            />

          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 20, end: 22 }} speed={1} style={{ ...alignCenter, justifyContent: 'flex-start' }}  onClick={() => ref.current.scrollTo(0)}>
        <div className={` ${'parallax'} ${'second-text-AOWR-0'}`}>
            <p>FROM THE TOP?</p>
            
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 20.2, end: 22 }} speed={2} style={{ ...alignCenter, justifyContent: 'flex-start' }}  onClick={() => ref.current.scrollTo(0)}>
        <div className={` ${'parallax'} ${'second-text-AOWR-2'}`}>
            <p>FROM THE TOP?</p>
            
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 20.4, end: 22 }} speed={2.1} style={{ ...alignCenter, justifyContent: 'flex-start' }}  onClick={() => ref.current.scrollTo(0)}>
        <div className={` ${'parallax'} ${'second-text-AOWR-2'}`}>
            <p>FROM THE TOP?</p>
            
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 20.6, end: 22 }} speed={2.2} style={{ ...alignCenter, justifyContent: 'flex-start' }}  onClick={() => ref.current.scrollTo(0)}>
        <div className={` ${'parallax'} ${'second-text-AOWR-3'}`}>
            <p>FROM THE TOP?</p>
            
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 20.8, end: 22 }} speed={2.3} style={{ ...alignCenter, justifyContent: 'flex-start' }}  onClick={() => ref.current.scrollTo(0)}>
        <div className={` ${'parallax'} ${'second-text-AOWR-4'}`}>
            <p>FROM THE TOP?</p>
            
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 21, end: 22 }} speed={2.4} style={{ ...alignCenter, justifyContent: 'flex-start' }}  onClick={() => ref.current.scrollTo(0)}>
        <div className={` ${'parallax'} ${'second-text-AOWR-5'}`}>
            <p>FROM THE TOP?</p>
            
          </div>
        </ParallaxLayer>
          
      </Parallax>
    </div>
  )
}

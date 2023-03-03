import './App.css';
import './styles.css';
import React from 'react';
import { Stage, Container, Sprite } from '@inlet/react-pixi'
import { AnimatePresence, motion, useCycle } from "framer-motion";
import TitleBackgroundStageLayer1 from './Components/TitleBackgroundLayer1.js'
import TitleBackgroundStageLayer2 from './Components/TitleBackgroundLayer2.js'
import TitleBackgroundStageLayer3 from './Components/TitleBackgroundLayer3.js'
import TitleBackgroundStageLayer4 from './Components/TitleBackgroundLayer4.js'
import TitleBackgroundStageLayer5 from './Components/TitleBackgroundLayer5.js'
import ANIMALS from './Assets/ANIMALS.png'
import ON from './Assets/ON.png'
import Wild from './Components/Wild'
import RICE from './Assets/RICE.png'
import RotatingBunny from './Components/RotateTest'
import CatSprite from './Components/CatSpriteMobile'
import DogSprite from './Components/DogSpriteMobile'
import BirdSprite from './Components/BirdSpriteMobile'
import PigSprite from './Components/PigSpriteMobile'
import RiceSprite from './Components/RiceSpriteMobile'
import Rain from './Components/Rain'
import burger from './Assets/burger.png'
import close from './Assets/closeIconSpritemap.png'
import Spritesheet from 'react-responsive-spritesheet';
import useWindowSize from './Components/TrueResize.js'

const links = [
  
  { name: "About", to: "/about", id: 1 },
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



function Home() {
  const [open, cycleOpen] = useCycle(false, true);
  const [width, height] = useWindowSize();

    const stageProps = {
      height,
      width,
      options: {
        backgroundColor: 0x3399ff,
        antialias: true,
        interactive:true
        
      },
    }
    
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
            <div className="Close-btn-home" style={{marginLeft:'10vw', cursor:'pointer'}}>
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
   
    <motion.div
          initial={{ width: 0 }}
          animate={{
            width: "50vw",
            transition: { delay: 0.2, duration: 0.1 }
          }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.3 }
          }}
        >
<div id="fixed-div">
<motion.div initial={{ opacity: 0 , y: "-100vh", rotate: 0, scale: 0}}
                       animate={{ opacity: 1, y: "0", rotate: 360, scale: 1}} transition={{type:'spring', velocity:15}}>
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
</motion.div>
<motion.div initial={{ opacity: 0 , y: "-100vh", rotate: 0, scale: 2}}
                    animate={{ opacity: 1, y: "0", rotate: 0, scale: 1}}  transition={{type:'spring', dampness:10, delay:0.50}}>

    <Stage{...stageProps}>
   
        
    
          
            < TitleBackgroundStageLayer1   />
            < TitleBackgroundStageLayer2  />
            < TitleBackgroundStageLayer3  />
           
            < TitleBackgroundStageLayer4  />
            < TitleBackgroundStageLayer5  />
            <Rain/>
            <RotatingBunny/>
            <Sprite image={ANIMALS} x={width/5} y={height/40} width={width/1.75} height={height/3}/>
            <Container x={0} y={0} width={width/4} height={height/4}>
            <Wild/>
            </Container>
           
            <Sprite image={RICE} x={width/2.2} y={height/2.5} width={width/4} height={height/4}/>
            <Sprite image={ON} x={width/2.5} y={height/3.5} width={width/7} height={height/7} />
            
           
            <Container x={5} y={0} width={width/.98} height={height/1.25}>
            <RiceSprite />
            <CatSprite />
            <DogSprite />
            <BirdSprite />
            <PigSprite />
            </Container>
        
         
             
            
    
    
    </Stage>
  
    </motion.div>
  </div>

     
  );
}

export default Home;

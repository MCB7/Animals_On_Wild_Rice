import './App.css';
import React, { useState } from 'react';
import { Stage, Container, Sprite, Provider } from '@inlet/react-pixi'
import AnimatedPage from "./AnimatedPage";
import { AnimatePresence, motion, useCycle } from "framer-motion";

import AppDrag from './Components/DarkGreenBlob.js'

import BlueBlob from './Components/BlueBlob.js'
import LightBlueBlob from './Components/LightBlueBlob.js'
import LightGreenBlob from './Components/LightGreenBlob.js'
import PurpleBlob from './Components/PurpleBlob.js'
import PinkBlob from './Components/PinkBlob.js'
import OrangeBlob from './Components/OrangeBlob.js'
import YellowBlob from './Components/YellowBlob.js'
import App from './Components/MonkeyB'
import Pupil from './Components/Pupil'

import Tentacle from './Components/Snake'
import BlinkSprite from './Components/Eyelid'

import burger from './Assets/burger.png'
import close from './Assets/closeIconSpritemap.png'
import button from './Assets/purplebutton_spritemap.png'
import Spritesheet from 'react-responsive-spritesheet';

import './styles/User-login-style.css'
import LOG from './Assets/loginbeaver-min.png'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from './firebase/config'
import {useNavigate, Link} from 'react-router-dom'
import {useAuthValue} from './Components/AuthContext'


import LoginStarBackground from './Components/LoginStarBackground'

import LoginMobile from './Components/LoginMobile'
import LoginDesktop from './Components/LoginDesktop'

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "About", to: "/about", id: 2 },
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
      staggerDirection: 1
    }
  }
};

const loginVariants = {
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: { opacity: 1,
    transition: {
      delayChildren: .5,
      staggerChildren: 0.2,
      staggerDirection: 1
    } }
};








function Login() {
  const {currentUser} = useAuthValue()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('') 
const [error, setError] = useState('')
const {setTimeActive} = useAuthValue()
const navigate = useNavigate()
const login = e => {
  e.preventDefault()
  signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    if(!auth.currentUser.emailVerified) {
      sendEmailVerification(auth.currentUser)
      .then(() => {
        setTimeActive(true)
        navigate('/verify-email')
      })
    .catch(err => alert(err.message))
  }else{
    navigate('/user')
  }
  })
  .catch(err => setError(err.message))
}


  const [open, cycleOpen] = useCycle(false, true);
  
  const [openLogin, cycleOpenLogin] = useCycle(false, true);
  
  const width = window.innerWidth
  const height = window.innerHeight
  const stageProps = {
    height,
    width,
    options: {
      backgroundColor: 0xffffff,
      antialias: true,
      interactive: true,
      

      
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
  width: '10vw'
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
    <AnimatePresence>
      
    {openLogin && (
    
    
         
        <motion.div
         
          initial="closed"
          animate="open"
          exit={{
            opacity: .05,
            transition: { delay: .7, duration: .7 }
          }}
          variants={loginVariants}
          
        >

                    

<div className='fixed-div'>
  
    <motion.div
       initial={{ width: 0 }}
       animate={{
         width: "42vh",
         transition: { delay: 0.2, duration: 0.1 }
       }}
       exit={{
         width: 0,
         transition: { delay: 0.3, duration: 0.3 }
       }}
    className='Input-Container-1-Purple-Box'
           
     variants={loginVariants}
      >
     <motion.div
       initial={{ width: 0 }}
       animate={{
         width: "42vh",
         transition: { delay: .3, duration: 0.3 }
       }}
       exit={{
        opacity: 0,
         transition: { delay: 0.2, duration: 0.2 }
       }}

           
     variants={loginVariants}
      >
     
          <Spritesheet
            className='Center-Login-Title'
            image={LOG}
            widthFrame={671}
            heightFrame={712}
            steps={17}
            fps={7}
            autoplay={true}
            loop={true}
            isResponsive={true}
            style={{
            display: 'block',
            width: '20vh',
            marginTop: '4vh',
            marginLeft: 'auto',
            paddingTop: '1vw'
          
          
              }}
            />
         
        
      
      
        
        {error && <div className='auth__error' style={{fontSize:'2vw', color:'white' ,textAlign:'center', marginTop:'2em'}}>{error}</div>}
        <form onSubmit={login} name='login_form'>
          <input className='input-email'
            type='email' 
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}/>
      
           
          <input className='input-password'
            type='password'
            value={password}
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>
   
             <motion.div whileHover={{ scale: 1.25 }} whileTap={{ rotate: 5  }}>
          <button className='button-submit' type='submit'>Login</button>
          </motion.div>
        </form>
       
     
        <div  className='Center-Login-Title'>
        <motion.div initial={{ opacity:0}}
       animate={{
        
         opacity: 1,
         transition: { delay: 1, duration: .5 }
       }} whileHover={{ scale: 1.25 }}>
          Don't have an account?
          <br /> 
          <Link to='/register'>Create one here</Link>
          
          </motion.div>
        </div>
        </motion.div>
        </motion.div>
      
      </div>

                    
</motion.div>


      )}
    </AnimatePresence>

<div id="fixed-div-PurpleButton">
<motion.div initial={{ opacity: .5, rotate: 180, scale: 2}}
                       animate={{ opacity: 1, rotate: 360, scale: 1}} transition={{type:'spring'}}>
                         <motion.div whileHover={{ scale: 1.25 }} whileTap={{ rotate: -10  }}>
<Spritesheet
image={button}
widthFrame={489.5}
heightFrame={449}
steps={6}
fps={10}
autoplay={true}
loop={true}
isResponsive={true}
style={{
display: 'block',
width: '27vw',
cursor: 'pointer',
}}
onPlay={Spritesheet => {
  Spritesheet.play();
  Spritesheet.setEndAt(5)
  
}}
onClick={Spritesheet => {
Spritesheet.play();
Spritesheet.goToAndPlay(5)
cycleOpenLogin(openLogin ? "Close" : "Open")
}}
/>
</motion.div>
</motion.div>
</div>




    <div id="fixed-div">
   
<motion.div initial={{ opacity: 0 , y: "-100vh", rotate: 270, scale: 0}}
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

<motion.div initial={{ opacity: 0, scale: 0}}
                       animate={{ opacity: 1, scale: 1}} transition={{type:'spring' ,dampness:10}} >
                         
                        <div className="pupil-desktop-image">
                         
<LoginDesktop/>

</div>
  

<div className="pupil-mobile-image ">
<LoginMobile/>
</div>

  {openLogin && (
    
    
         
    <motion.div
     
      initial="closed"
      animate="open"
      exit="closed"
      variants={loginVariants}
    >
      
  <motion.div animate={{y:'-100vh'}}>

  <LoginStarBackground/>
  </motion.div>
  </motion.div>
  
  )}

  </motion.div>


  </div>

     
  );

}

export default Login;

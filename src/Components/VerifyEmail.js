import {useAuthValue} from './AuthContext'
import {useState, useEffect} from 'react'
import {auth} from '../firebase/config'
import {sendEmailVerification} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import VerifyBackground3  from './VerifyBG3.js'
import VerifyBackground2  from './VerifyBG2.js'
import VerifyBackground1  from './VerifyBG1.js'
import { Stage } from '@inlet/react-pixi'
import {  motion } from "framer-motion";

import '../styles/Verify-Email-style.css'

function VerifyEmail() {

  const {currentUser} = useAuthValue()
  const [time, setTime] = useState(60)
  const {timeActive, setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      currentUser?.reload()
      .then(() => {
        if(currentUser?.emailVerified){
          clearInterval(interval)
          navigate('/')
        }
      })
      .catch((err) => {
        alert(err.message)
      })
    }, 1000)
  }, [navigate, currentUser])

  useEffect(() => {
    let interval = null
    if(timeActive && time !== 0 ){
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    }else if(time === 0){
      setTimeActive(false)
      setTime(60)
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [timeActive, time, setTimeActive])

  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
    .then(() => {
      setTimeActive(true)
    }).catch((err) => {
      alert(err.message)
    })
  }

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
    <>
       <motion.div initial={{ opacity: 0}}
       animate={{

         opacity: 1,
        
         transition: { delay: .40, duration: .25 }
       }}>
    <div className='center'>
      <div className='Verify-Email-Box'>
      <motion.div initial={{ scale:0, opacity: 0}}
       animate={{

         opacity: 1,
         scale: 1,
         transition: { delay: .50, duration: .5 }
       }}>
        <h1>Verify your Email Address</h1>
        <p>
          A Verification email has been sent to:<br/>
          <span>{currentUser?.email}</span>
        </p>
        <span>Follow the instruction in the email to verify your account</span>  
         
        <button className='button-resend'
          onClick={resendEmailVerification}
          disabled={timeActive}
        >Resend Email {timeActive && time}</button>
           </motion.div>
      </div>
    </div>
    </motion.div>
    <Stage{...stageProps}>
    <VerifyBackground1/>
    <VerifyBackground2/>
    <VerifyBackground3/>
    </Stage>
    </>
  )
}

export default VerifyEmail
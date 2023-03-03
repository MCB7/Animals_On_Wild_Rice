import {useState, useEffect} from 'react'

import {auth} from '../firebase/config'
import {useNavigate, Link} from 'react-router-dom'
import {createUserWithEmailAndPassword, sendEmailVerification, updateProfile} from 'firebase/auth'
import {useAuthValue} from './AuthContext'
import { AnimatePresence, motion, useCycle } from "framer-motion";

import '../styles/User-register-style.css'
import RegisterBackground from './RegisterBackground'
import REG from '../Assets/register.png'
import Spritesheet from 'react-responsive-spritesheet';
function Register() {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [profilepic, setProfilepic] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {setTimeActive} = useAuthValue()

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }
  useEffect(() => {
    
  setProfilepic('https://firebasestorage.googleapis.com/v0/b/aowr-2dfb4.appspot.com/o/profile_Picture%2FdefaultProfilePicture.png?alt=media&token=a36d1e97-36c3-4d32-8824-82fb6df8cde7')
  

  }, [])
  
 

  const register = async (e) => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      // Create a new user with email and password using firebase
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      console.log(`User ${user.uid} created`)
      await updateProfile(user, {
        displayName: username,
        photoURL: profilepic
      });
      console.log("User profile updated")
      console.log("  Name: " + user.displayName)
    
     
          await sendEmailVerification(auth.currentUser)   
          
           await  navigate('/verify-email')
            setTimeActive(true)
            
          //.catch((err) => alert(err.message))
      
        //.catch(err => setError(err.message))
    }
    
    setEmail('')
    setUsername('')
    setPassword('')
    setConfirmPassword('')
    
    
  }
  


  return (
    <div className="scroll-allow">
          <motion.div
       initial={{ opacity:0}}
       animate={{
          opacity: 1,
         transition: { delay: .2, duration: 0.4 }
       }}>
        <RegisterBackground/>
        </motion.div>
        <motion.div initial={{ opacity:0}}
       animate={{
        
         opacity: 1,
         transition: { delay: .3, duration: 0.2 }
       }}>
    <div className='fixed-div'>
    <div className='Input-Container-1-Green-Box'>
    <motion.div
       initial={{ opacity:0,}}
       animate={{
          opacity: 1,
         transition: { delay: .2, duration: 0.4 }
       }}>
    <Spritesheet
            className='Center-Image-Register'
            image={REG}
            widthFrame={600}
            heightFrame={292}
            steps={3}
            fps={1}
            autoplay={true}
            loop={true}
            isResponsive={true}
            style={{
            display: 'block',
            width:"25vw",
            height:'auto',
            marginTop: '1vw',
            marginLeft: 'auto',
            marginRight: 'auto',
         
          
              }}
            />
        </motion.div>
    <div className='center'>
      <div className='auth'>
    
        {error && <div className='auth__error'>{error}</div>}

        <form onSubmit={register} name='registration_form'>
      <motion.div
       initial={{ opacity:0, width:0}}
       animate={{
         width: '100%',
         opacity: 1,
         transition: { delay: .3, duration: 0.3 }
       }}>
        <input className='input-email-Register'
            type='email' 
            value={email}
            placeholder="Enter your email"
            required
            onChange={e => setEmail(e.target.value)}/>
        </motion.div>
        <motion.div
       initial={{ opacity:0, width:0}}
       animate={{
         width: '100%',
         opacity: 1,
         transition: { delay: .3, duration: 0.5 }
       }}>
        <input className='input-username-Register'
            type='username' 
            value={username}
            placeholder="Enter a username"
            required
            onChange={e => setUsername(e.target.value)}/>
        </motion.div>
        <motion.div
       initial={{ opacity:0, width:0}}
       animate={{
         width: '100%',
         opacity: 1,
         transition: { delay: .4, duration: 0.7 }
       }}>
        <input className='input-password-Register'
            type='password'
            value={password} 
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>
            </motion.div>
           <motion.div
       initial={{ opacity:0, width:0}}
       animate={{
         width: '100%',
         opacity: 1,
         transition: { delay: .5, duration: 0.9 }
       }}>
        <input className='input-password-Register' 
            type='password'
            value={confirmPassword} 
            required
            placeholder='Confirm password'
            onChange={e => setConfirmPassword(e.target.value)}/>
          </motion.div>
          
          <motion.div initial={{ opacity:0, rotate:0}}
       animate={{
         rotate: 360,
         opacity: 1,
         transition: { delay: .5, duration: 0.9 }
       }} whileHover={{ scale: 1.25 }} whileTap={{ rotate: -5  }}>
          <button type='submit' className='button-submit-Register'>Register</button>
          </motion.div>
        </form>
        <div className='Center-Register-Title'>
        <span >
        <motion.div initial={{ opacity:0}}
       animate={{
        
         opacity: 1,
         transition: { delay: 1, duration: .5 }
       }} whileHover={{ scale: 1.25 }}>
          Already have an account? 
          <br /> 
          <Link to='/login'>login</Link>
          </motion.div>
        </span>
        </div>
        
      </div>
      
    </div>
    
    </div>
    </div>
    </motion.div>
    </div>

   
  )
}

export default Register
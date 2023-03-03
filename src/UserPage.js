import react from 'react'
import Spritesheet from 'react-responsive-spritesheet';
import { Stage, Container, Sprite } from '@inlet/react-pixi'
import { useState, useEffect} from 'react'
import create from './Assets/createButton-min.png'

import animals from './Assets/collage_spritemap-min.png'
import './UserPage-Style.css'
import UserBackground from './Components/UserBackground.js'
import button from './Assets/purplebutton_spritemap.png'
import close from './Assets/closeIconSpritemap.png'
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";
import {useAuthValue} from './Components/AuthContext'
import { signOut } from 'firebase/auth' 
import {auth} from './firebase/config'

import ImageGridUserProfile from './Components/ImageGridUserProfile.js'
import UserUploadForm from './Components/UserUploadForm.js'
import useWindowSize from './Components/TrueResize.js'
import UploadProfilePictureForm from './Components/UploadProfilePictureForm.js'

import Update from './Assets/update.svg'
//User uploads image to USER COLLECTION with USER ID assigned to the image
//the image displayed  within profile will be CURRENT USER associated ID attached to the image 
//maybe somethingh like USERID.IMG.png
//that way only users see their images while ADMIN can display whole collection

import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

 const autho = getAuth();
onAuthStateChanged(autho, (user) => {
  if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
     const uid = user.uid;
    
   
//     // ...
  } else {
//     // User is signed out
//     // ...
  }

 

});


const links = [
  { name: "LOGOUT", to: "/login", id: 1 },

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
      delayChildren: .75,
      staggerChildren: 0.2,
      staggerDirection: 1,
      
    }
    
  }
};

const UpdateItemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const UpdateSideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      delayChildren: .75,
      staggerChildren: 0.2,
      staggerDirection: 1,
      
    }
    
  }
};

const UserPage = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const [openUpdate, cycleOpenUpdate] = useCycle(false, true);
  let navigate = useNavigate();
  const {currentUser} = useAuthValue()
  const [width, height] = useWindowSize();
  
    const stageProps = {
        height,
        width,
        options: {
          backgroundColor: 0xFFFFFF,
          antialias: true,
          interactive:true
          
        },
      }
const GotoCreate = () => {
  navigate("/create");
}

const GotoLogin = () => {
  navigate("/Login");
  signOut(auth);
  

}

const GotoGallery = () => {
  navigate("/gallery");

}


const user = auth.currentUser;
const Username = user.displayName;
const [ProfilePic, setProfilePic] = useState('')


useEffect(() => {


  function resolveAfterHalfSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(setProfilePic(user.photoURL));
      }, 500);
    });
  }

  async function asyncCall() {
      
    const result = await resolveAfterHalfSecond();

  }
  asyncCall();
  
}, [user.photoURL, setProfilePic])


const [pendingOpen, cyclePendingOpen] = useCycle(false, true);
const PendingVariant = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};



    return (
<div>

{pendingOpen && (

<motion.div className="PENDING-pop-up-box"
    initial={{scale:0,
    opacity: 0 }}
animate={{
    scale: 1,
    opacity: 1,
    transition: {  type: "spring",
    stiffness: 25,
    
    velocity: 25, delay: .10, duration: 0.5}
}}
exit={{y:'-100vh'}}
variants={PendingVariant}
>
  <motion.div className="PENDING-pop-up-box-text"
     initial={{ scale: 0 }}
     animate={{ scale: 1 }}
     transition={{
         type: "spring",
            stiffness: 3,
            damping: 5,
            velocity: 4,
             duration: 0.25,
             delay: .25, 
             duration: 1 
            }}>
            Awaiting for review!
            <div className='PENDING-pop-up-box-buttons'>
             <motion.button className='PENDING-pop-up-box-buttons-colors'
              onClick={() => cyclePendingOpen(pendingOpen ? "Close" : "Open")}
            whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.9 }}
            >Alright!</motion.button> 
            </div>
  </motion.div>
</motion.div>
              
)}

<AnimatePresence>


  

{openUpdate && (
  <motion.div

    initial={{ width: 0 }}
    animate={{
      width: "100vw",
      height: "100vh",
      transition: { delay: .5, duration: 0.3 }
    }}
    exit={{
      width: 0,
      transition: { delay: 0.7, duration: 0.3 }
    }}
  >


      
        
        <motion.div
        className='Update-bg'
        initial="closed"
        animate="open"
        exit="closed"
        variants={UpdateItemVariants}
      >
        
        <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    transition={{ delay: .5}}>

                      
            <div className="Close-btn-User">
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
    cycleOpenUpdate(openUpdate ? "Close" : "Open")
    
  }
  }
  onLoopComplete={Spritesheet => {
    Spritesheet.goToAndPause(1)
  }}
  
  
  />

  
  </div>

        
            </motion.div>
            
            <UploadProfilePictureForm openUpdate={openUpdate} cycleOpenUpdate={cycleOpenUpdate} />
          
          
          
         
           
       
        </motion.div>
        </motion.div>
)}
      
      {open && (
        <motion.spann

          initial={{ width: 0 }}
          animate={{
            backgroundColor: "#000",
            width: "100vw",
            height: "100vh",
            transition: { delay: .5, duration: 0.3 }
          }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.3 }
          }}
        >
           
          <motion.div
            className="Usercontainer"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
        <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    transition={{ delay: 2 }}>
            <div className="Close-btn-User">
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

            
            <div className="Hide-Button">
            <button id='logout-button'onClick={GotoLogin}>LOGOUT</button>
            <button id='Gallery-button'onClick={GotoGallery}>GALLERY</button>
            </div>
            <div className='center-profilepic-username-container '>
            <div className='center-profilepic-username '>
              <div className="Profile-Picture-center">
                
            <img src={ProfilePic} className='Profile-Picture-sizing' />
            </div>
           
            {Username}!
           
            <motion.div
                className='LogOut-Center'
                whileHover={{ scale: 1.1 }}
                onTap={{scale: 0}}
                  variants={itemVariants}
                >
            <img onClick={()=>cycleOpenUpdate(openUpdate ? "Close" : "Open")} src={Update} className="Update-Button-Sizing"/>
           
            </motion.div>
            
            </div>
            </div>
                  <br/>
                <div className="Center-Logout-Container">
              {links.map(({ name, to, id }) => (
               

                <motion.a
                className='LogOut-Center'
                  key={id}
                  href={null}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                    <label className="cursor"  htmlFor="logout-button">
                  {name}
                  </label>
                
                </motion.a>

                
              
              ))}

                   <motion.a
                className='LogOut-Center'
                whileHover={{ scale: 1.1 }}
                onTap={{scale: 0}}
                  variants={itemVariants}
                >
                    <label className="cursor"  htmlFor="Gallery-button">
                  Gallery
                  </label>
                
                </motion.a>
                </div>

         
              <ImageGridUserProfile cyclePendingOpen={cyclePendingOpen} pendingOpen={pendingOpen}/>

  
              
            </motion.div>
          </motion.spann>
        )}
      </AnimatePresence>
        <Stage{ ...stageProps}>
        <UserBackground/>
        </Stage>
        
<div className="User-Page-Container">
    <div className="User-Page-Button-Container">
    <motion.div initial={{ opacity: .5, y:"-100vh",scale: 2}}
                       animate={{ opacity: 1, y: "0", scale: 1}} transition={{type:'spring', delay:0.25, dampness:15}}>
<motion.div whileHover={{ scale: 1.12 }} whileTap={{scale:1}}>
        <Spritesheet
        image={create}
        widthFrame={929}
        heightFrame={500}
        steps={8}
        fps={10}
        autoplay={false}
        loop={true}
        isResponsive={true}
        style={{
            height: '30vh',
            width: '30vw',
            cursor: 'pointer'
        }}
        onClick={Spritesheet => {
            Spritesheet.play();
            setTimeout(GotoCreate, 1000);
           }}
          onLoopComplete={Spritesheet => {
            Spritesheet.goToAndPause(.001)
          
          }}
        />

  
      </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: .5, y:"-100vh",scale: 2}}
                       animate={{ opacity: 1, y: "0", scale: 1}} transition={{type:'spring', delay:0.50, dampness:15}}>
<motion.div whileHover={{ scale: 1.12 }} whileTap={{scale:1}}>
         <UserUploadForm/>
     </motion.div>
      </motion.div>
  
    </div>


    <div className="User-Page-ImageCollage-Container">
    <motion.div initial={{ opacity: 0, x:"-100vh",scale: 0}}
                       animate={{ opacity: 1, x: "0", scale: 1}} transition={{type:'spring', delay:0.75, dampness:25}}>
                        
        <Spritesheet
  
        image={animals}
        widthFrame={649}
        heightFrame={480}
        steps={4}
        fps={1}
        autoplay={true}
        loop={true}
        isResponsive={true}
        style={{
            height: '50vh',
            width: '50vw'
        }}
    
        />
      
      </motion.div>

    </div>

</div>

<div id="fixed-div-UserPurpleButton">
<motion.div initial={{ opacity: 0,rotate: 180,scale: 0}}
                       animate={{ opacity: 1 , rotate: 360, scale: 1}}  transition={{type:'spring', delay:1, dampness:25}} >
                         <motion.div whileHover={{ scale: 1.25 }} whileTap={{ rotate: 12  }} >
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
width: '15vw',
height: '15vh',
cursor: 'pointer',
}}
onPlay={Spritesheet => {
  Spritesheet.play();
  Spritesheet.setEndAt(5)
}}
onClick={Spritesheet => {
Spritesheet.play();
Spritesheet.goToAndPlay(5)
cycleOpen(open ? "Close" : "Open")

}}
/>
</motion.div>
</motion.div>




</div>




</div>

    )
}

export default UserPage
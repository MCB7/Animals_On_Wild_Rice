import React, {useState, useEffect} from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import bg00 from './Assets/kalidal.gif'
import bg0 from './Assets/gallery-background0.png'
import bg2 from './Assets/gallery-background2.png'
import './Gallery-styles.css'
import useFirestore from './hooks/UseFirestore'
import Modal from './Components/Modal.js'
import './Gallery-styles.css'
import {getFirestore, collection, getDocs, query} from '@firebase/firestore'
import burger from './Assets/burger.png'
import close from './Assets/closeIconSpritemap.png'
import { AnimatePresence, motion, useCycle } from "framer-motion";
import LoadingImage from './Assets/loadinggallery.gif'
import Spritesheet from 'react-responsive-spritesheet';
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



const Gallery = (  {  } ) => {
  const [open, cycleOpen] = useCycle(false, true);
  const [CycleTrue, setCycleTrue] = useState(true);
  const [CycleFalse, setCycleFalse] = useState(false);
  const [openComment, cycleOpenComment] = useCycle(CycleFalse, CycleTrue);
  const [openCommentText, cycleOpenCommentText] = useCycle(CycleFalse, CycleTrue);
  
  
  const { docs } = useFirestore('images');
  const [ selectedImg, setSelectedImg ] = useState(null);
  const [selectedImgIDComment, setSelectedImgIDComment] = useState(null);
  const [imageID, setImageID] = useState(null);


  const db = getFirestore()
  const colRef = collection(db, 'images')
  const [page, setPage] = useState()

  const auth = getAuth();
  const user = auth.currentUser;
  

  const [userID, setUserID] = useState('');




  const navigate = useNavigate();

  const handleNavLogin = () => {
  navigate('/login');
  }

  

  useEffect(() => {
 
 
  getDocs(colRef)
    .then((snapshot) => {
      let images = []
      snapshot.docs.forEach((doc) => {
        images.push({ ...doc.data(), id:doc.id })
      })
      function resolveAfterHalfSecond() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(setPage(images.length));
          }, 100);
        });
      }
      async function asyncCall() {
      
        const result = await resolveAfterHalfSecond();
        if(auth.currentUser != null ){
          const stringUser = String(user.uid)
        
        setUserID(stringUser)
      }
   
      }
      asyncCall();
      
      })
      

      const images = Array.from(document.querySelectorAll('.lazy-images','img'));
        
      if ('IntersectionObserver' in window) {
          const imageObserver = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      const image = entry.target;
                      image.src = image.dataset.src;
                      images.onload = () => images.previousElementSibling.remove();
                      
                     
                      
                      imageObserver.unobserve(image);
                  }
              });
          });
          
          images.forEach(img => imageObserver.observe(img));
         
      
        }
        

       

     
  })

      

  const links = [
    { name: "Home", to: "/", id: 1 },
    { name: "About", to: "/about", id: 2 },
    { name: "Login", to: "/login", id: 3 },

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

  const CommentsContainerVariants = {
    closed: {
      opacity: 0
    },
    open: { opacity: 1 }
  };
  
  const CommentsVariants = {
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

  const CommentsContainerVariantsText = {
    closed: {
      opacity: 0
    },
    open: { opacity: 1 }
  };
  
  const CommentsVariantsText = {
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

  

 


  
  



return (
    <div>


<AnimatePresence>
      {open && (
        <motion.aside
          initial={{ width: 0 }}
          animate={{
            width: '50vw',
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
          <div className="Close-btn-home">
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
     
<Parallax pages={page/2} horizontal={true}>
  <ParallaxLayer offset={0} speed={0}  style={{ display: 'flex', justifyContent: 'left', alignItems: 'left'}} >
  { docs  && docs.map(doc5 => (
      <motion.img src={bg0}  key={doc5.id}
      initial={{ opacity: 0, scale: 2}}
      animate={{ opacity: 1, scale: 1}}
      transition={{
        type: "spring",
        delay: .3,
        stiffness: 70,
        damping: 140,
        velocity: 10}}/>
    ))}
  </ParallaxLayer>
  <ParallaxLayer offset={0} speed={.25} style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
  { docs  && docs.map(doc4 => (
   <motion.div key={doc4.id}
   initial={{ opacity: 0,scale:2}}
   animate={{ opacity: 1, scale:1}}
   transition={{
     type: "spring",
     delay: .3,
        stiffness: 80,
        damping: 150,
        velocity: 15
   }}
 
   >
   
<div className="Gallery-BG-1"/>

  
  
  
  
</motion.div>
      
    ))}
  </ParallaxLayer>
  <ParallaxLayer offset={1} speed={.50} style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
  { docs  && docs.map(doc3 => (
       <motion.div key={doc3.id}
       initial={{ opacity: 0, scale: 2}}
       animate={{ opacity: 1, scale: 1}}
       transition={{
         type: "spring",
         delay: .3,
         stiffness: 90,
         damping: 160,
         velocity: 20
       }}
     
       >
   
   <div className="Gallery-BG-2"/>
 



</motion.div>
    ))}
  </ParallaxLayer>

  <ParallaxLayer offset={0} speed={0.75} style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
  { docs  && docs.map(doc2 => (
         <motion.div key={doc2.id}
         initial={{ opacity: 0, scale: 0}}
         animate={{ opacity: 1, scale: 1}}
         transition={{
           type: "spring",
           delay: .2,
           stiffness: 53,
           damping: 70,
           velocity: 4
         }}
       
         >
  <div className="Gallery-BG-4"/>
  
  </motion.div>
    ))}
  </ParallaxLayer>
  
  
  
  <ParallaxLayer offset={.10} speed={1} style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
  { docs  && docs.map(doc1 => (
    <motion.img src={bg2} key={doc1.id}
    initial={{ opacity: 0, rotate: 0, scale: 0}}
    animate={{ opacity: 1, rotate: 360, scale: 1}}
    transition={{
      type: "spring",
      delay: .5
    }}
  
    />

    
  
    ))}
  </ParallaxLayer>
  
 
  
  
  
 
  <ParallaxLayer offset={0.10} speed={1.25} style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
  { docs  && docs.map(doc => (
      
            
        <motion.div className='images-horizontal-centered-row' key={doc.id}
         layout
         
         whileHover={{ opacity: 1 }}
         onClick={() => setSelectedImg(doc.url)}
        >
            
    <motion.div
    
                    initial={{ opacity: 0 , y: "-100vh", rotate: 0, scale: 0}}
                    animate={{ opacity: 1, y: "0", rotate: 360, scale: 1}}
                    transition={{
                      type: "spring",
                      delay: 2
                    }}
                    onClick={()=>setSelectedImgIDComment(doc.id)}

                    > 
                    

    <motion.img src={ LoadingImage} alt="Animal on Wild Rice" data-src={doc.url}
    className='lazy-images' 
                    
                   
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                          
                            layout
                           
                    />

                   

                    
       

                    
                
  </motion.div>
    </motion.div>
   
        ))}
  </ParallaxLayer>

  


 
  </Parallax>


  <div className="Hide-Button">
    <div onClick={()=>setImageID(selectedImgIDComment)} >
    <button id='PictureID-Comment-Selector'  onClick={()=>cycleOpenComment(openComment ? "Close" : "Open")} />
    </div>

    

    <button id='GOTO-LOGIN' onClick={handleNavLogin}/>

    </div>
   
                    
    

 
  { selectedImg && <Modal setImageID={setImageID} imageID={imageID}  selectedImg={selectedImg} setSelectedImg={setSelectedImg} openComment={openComment} cycleOpenComment={cycleOpenComment} CommentsContainerVariants={CommentsContainerVariants} CommentsVariants={CommentsVariants} setCycleTrue={setCycleTrue} setCycleFalse={setCycleFalse} openCommentText={openCommentText} cycleOpenCommentText={cycleOpenCommentText} CommentsContainerVariantsText={CommentsContainerVariantsText} CommentsVariantsText={CommentsVariantsText} userID = {userID } /> }


   </div>
  )};

  export default Gallery;
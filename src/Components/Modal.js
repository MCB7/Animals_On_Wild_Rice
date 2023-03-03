import React from 'react'
import {useState, useEffect} from 'react';
import { getAuth } from "firebase/auth";
import ModalComment from './ModalComment.js' 
import { AnimatePresence, motion, useCycle } from "framer-motion"; 
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
import {getFirestore, getDoc, collection, deleteDoc, doc, query, where, onSnapshot, orderBy} from 'firebase/firestore'
import loader from"../Assets/LOADER.GIF"
import useFirestore from '../hooks/UseFirestore'

//Creates Collection using USER.UID (i.e ` projectFirestore.collection('{USER.UID}'))
// it Takes in IMAGEID state everytime they click POST comment
// queries the amount of IMAGEID in Collection
// if IMAGEID > 5 then remove COMMENT/POST button 




const Modal = ({ 
    selectedImg, 
    setSelectedImg,  
    openComment, 
    cycleOpenComment,
     CommentsContainerVariants,
     CommentsVariants, 
     setImageID,
     openCommentText, 
     cycleOpenCommentText, 
     CommentsContainerVariantsText,
     CommentsVariantsText, 
     imageID,
     userID  }) => {
    const auth = getAuth();
    const user = auth.currentUser;
    

    
    
    


 
    const collectionRef = projectFirestore.collection('comments');
    const [comment, setComment] = useState('');
    const [docID, setDocID] = useState('');
    const { docs } = useFirestore('comments');

    const db = getFirestore()
    const colRef = collection(db, 'comments')
    const q = query(collection(db, 'comments'), where("imgID", "==", imageID), orderBy("createdAt"));
    const [cmmnts, setCmmnts] = useState([]);

      useEffect(() => {
      onSnapshot(q, (snapshot) => {
      let comments = []
      snapshot.docs.forEach(doc => {
        comments.push({ ...doc.data(), id: doc.id })

      });
      setCmmnts(comments)
    
       
     
      })
 
      },[   selectedImg, 
    setSelectedImg,  
    openComment, 
    cycleOpenComment,
     CommentsContainerVariants,
     CommentsVariants, 
     setImageID,
     openCommentText, 
     cycleOpenCommentText, 
     CommentsContainerVariantsText,
     CommentsVariantsText, 
     imageID,
     userID, setCmmnts])

     
      
       
         
      
    
    
      
    const handleClick = (e) => {
       
            setSelectedImg(null); 
            cycleOpenComment(2)
          
    }

    const closeComment = (e) => {
       
        cycleOpenCommentText(2)
      
}


const [open, cycleOpen] = useCycle(false, true);
const DeleteVariant = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const [openERROR, cycleOpenERROR] = useCycle(false, true);
const DeleteVariantERROR = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};



    

    const commentImg = (e) =>{

     const stringUser = String(user.uid)
     const displayname = user.displayName;
     const ProfilePic = user.photoURL
     const imgID = imageID
     const id = stringUser
     const userName = displayname
     const userProfilePic = ProfilePic
     const text = comment
     const createdAt = timestamp();
     

  
     collectionRef.add({imgID, id, userName,userProfilePic, text,createdAt });
     
     cycleOpenCommentText((openCommentText ? "Close" : "Open"))  
    }

    


    function remove_image(){
        document.getElementById('image_X').remove();
     }

     const deleteComment = async (docId) => {
        try {
          let docRef = doc(db, `comments/${docId}`);  
          await deleteDoc(docRef);
        } catch (ex) {
          cycleOpenERROR(openERROR ? "Close" : "Open")
        throw ex;
        }
        finally{
          // logic here to always run
        
       
        }
      };
      
      
   
      

    
    return (
       <>

       
      
        <motion.div className= "backdrop" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: "spring",
                   stiffness: 3,
                   damping: 5,
                   velocity: 4,
                    duration: 0.4 
              }}
            
           
            >
  

      
    <div id="parent">
        
    <div id="wide" onClick={handleClick} >
            <motion.img src={selectedImg} alt="BIGGER Animal on Wild Rice"
            className="Mainimg"
            initial={{scale: 0, y :"-100vh" }}
            animate={{ scale: 1, y: 0 }}
            transition={{
                type: "spring",
                   stiffness: 10,
                   damping: 1,
                   velocity: 10
              }}
          
            />
    </div>
            



     
 
        <AnimatePresence>
  
      {openComment && (
      <>
<AnimatePresence>
{open && (

<motion.div className="Delete-Confirmation-pop-up-box"
    initial={{scale:0,
    opacity: 0 }}
animate={{
    scale: 1,
    opacity: 1,
    transition: {  type: "spring",
    stiffness: 25,
    
    velocity: 25, delay: .10, duration: 0.2 }
}}
exit={{scale: 0}}
variants={DeleteVariant}
>
  <motion.div className="Delete-Confirmation-pop-up-box-text"
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
            Are you sure you want to delete this comment?
            <div className='Delete-Confirmation-pop-up-box-buttons'>
            <motion.button onClick={()=> deleteComment(docID)} className='Delete-Confirmation-pop-up-box-buttons-colors'
            whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.9 }}
            ><div  onClick={() => cycleOpen(open ? "Close" : "Open")}>YEP</div> </motion.button> 
             <motion.button className='Delete-Confirmation-pop-up-box-buttons-colors'
              onClick={() => cycleOpen(open ? "Close" : "Open")}
            whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.9 }}
            >NOPE</motion.button> 
            </div>
  </motion.div>
</motion.div>
              

             )}

</AnimatePresence>
<AnimatePresence>
{openERROR && (

<motion.div className="Delete-ERROR-pop-up-box"
    initial={{scale:0,
    opacity: 0 }}
animate={{
    scale: 1,
    opacity: 1,
    transition: {  type: "spring",
    stiffness: 25,
    
    velocity: 25, delay: .10, duration: 0.2 }
}}
exit={{scale:0}}
variants={DeleteVariantERROR}
>
  <motion.div className="Delete-ERROR-pop-up-box-text"
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
            Ain't you bugaboo!
            <div className='Delete-ERROR-pop-up-box-buttons'>
            <motion.button className='Delete-ERROR-pop-up-box-buttons-colors'
            whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.9 }}
            ><div  onClick={() => cycleOpenERROR(openERROR ? "Close" : "Open")}>WHOOPS!</div> </motion.button>  
            </div>
  </motion.div>
</motion.div>
              

             )}
       </AnimatePresence>
       

      <motion.button whileHover={{ scale: .85 }} onClick={()=>cycleOpenCommentText(openCommentText ? "Close" : "Open")}  className="IMGComment-zIndex"> <div className="button-submit-Comment" >comment</div></motion.button>
            <motion.div
            className="Comment-Box"
            initial="closed"
            animate="open"
            exit="closed"
            variants={ CommentsContainerVariants}
            >
                      <div id="narrow">

                    
                   
                     
               
        <motion.div 
     
        initial={{y:'-100vh',
            opacity: 0 }}
        animate={{
            y: 0,
            opacity: 1,
            transition: {  type: "spring",
            stiffness: 25,
            
            velocity: 25, delay: .10, duration: 0.2 }
        }}
        exit={{y:'-100vh'}}
        variants={CommentsVariants}
        >
            
            { cmmnts  && cmmnts.map(doc => (



            <div className="flex-container">


              
               <motion.div  
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity: 0}}
            layout>
            
            <div className="flex-child magenta"  onClick={() => cycleOpen(open ? "Close" : "Open")}>
              
            <div onClick={() =>setDocID(doc.id)}>
            <div className="center-profile-pic-name ">
            <motion.div initial={{scale:0,}}
                        animate={{scale: 1, transition: {  type: "spring", delay: 1, duration: 2 }}}
                        exit={{scale:0}}
                        variants={CommentsVariants}>

            <img src = {doc.userProfilePic} key={doc.id} onLoad={()=>remove_image()} className='Comment-Img-Profile'/>
            
            
            
            
 
        
            
            
          
            </motion.div>
        
            <motion.div initial={{scale:0,}}
                        animate={{scale: 1, transition: {  type: "spring", delay: 1.5, duration: 3 }}}
                        exit={{scale:0}}
                        variants={CommentsVariants} className="comment-username">
            {doc.userName}
            </motion.div>
            </div>
            </div>
            </div>
            </motion.div>
            
            <div className="flex-child green">
             <div className="ow"> 
             <motion.div initial={{x:'200vw'}}
                        animate={{x: 0, transition: {  type: "spring", delay: 1.5, duration: 3 }}}
                        exit={{scale:0}}
                        variants={CommentsVariants}>
         
            {doc.text}
          
        
            </motion.div>
            
            </div> 
            </div>

            <img src={loader} className="loader-comment-image" id="image_X"/>
            </div>
      
    ))}
      
     
        
   
        
  
        </motion.div>
    
        </div>
            </motion.div>
            </>
      )}
    
    </AnimatePresence>
    
    </div>
    </motion.div>


                   <div className='comment-button-box'>
                   <div className='Comment-zIndex'>
                    <motion.div whileHover={{ scale: .85 }}>
                    
                       <ModalComment />
          
                 
                       </motion.div>
                   </div>
                   </div>

                       {openCommentText && (
      
      <motion.div
      className="Comment-Text-Overlay-Container"
      initial="closed"
      animate="open"
      exit="closed"
      variants={ CommentsContainerVariantsText}
      
      >
            <div className="IMGPost-zIndex-container">
            <textarea className="Text-Comment-Box " value={comment} required onChange={(e) => setComment(e.target.value)}/>
            <br/> 
                
            <button onClick={()=> {commentImg(); setTimeout(setComment(''), 1000)}} className="IMGPost-zIndex"> <div className="button-submit-Comment">Post</div></button>
            <div style={{ positionm: 'fixed', top:'0', width:'100vw', height:'100vh', zIndex:'1', backgroundColor:'transparent'}} onClick={closeComment}/>
            </div>     

      </motion.div> )}         
       </>

    )
}

export default Modal;
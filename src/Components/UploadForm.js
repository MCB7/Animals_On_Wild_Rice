import React, {useState} from 'react';
import ImageGrid from './ImageGrid.js'
import ImageDeletionGrid from './ImageDeletionGrid.js'
import {AnimatePresence, motion, useCycle } from "framer-motion"; 
import style from '../styles/Admin-Main-Options.css'
import logout from '../Assets/logout_icon.svg'

const UploadForm = () => {
    //
    const [ selectedImg, setSelectedImg ] = useState(null);
    
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const [openUserImageGrid, cycleOpenUserImageGrid] = useCycle(false, true);
    const [HideButton4openUserImageGrid, cycleHideButton4OpenUserImageGrid] = useCycle(true, false);

    const [openUserDELETEImageGrid, cycleOpenUserDELETEImageGrid] = useCycle(false, true);
    const [HideButton4openUserDELETEImageGrid, cycleHideButton4OpenUserDELETEImageGrid] = useCycle(true, false);

    const IMGVariants = {
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


    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else{
            setFile(null);
            setError(<div className="error-style">'Please select an image file png or jpeg'</div>);

        }
        
    }
    
    //<ImageGrid  />
    //<form>
    //<input type="file" onChange={changeHandler} />
    // <div className='output'>
     //{ error && <div className="error">{ error }</div> }
    // { file && <div>{ file.name }</div> }
    // { file && <MainProgressBar file={file} setFile={setFile}/> }
    
    // { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
   
    // </div>
 //</form>

 const handleLogout = () => {
  localStorage.clear();
  window.location.pathname = "/signin";
};





    return (
        <div className="Options-Background">
       
        <AnimatePresence>
          {HideButton4openUserImageGrid && (
            <>
               <motion.img src={logout} className="Logout-Icon " initial={{  scale: 0 }} animate={{  scale: 1 }} whileHover={{scale:1.2}} onClick={handleLogout} />
        <motion.div  whileHover={{rotate:2}}   className='ImageGrid-Open-Button-Container' onClick={()=>{cycleOpenUserImageGrid(openUserImageGrid ? "Close" : "Open"); cycleHideButton4OpenUserImageGrid(HideButton4openUserImageGrid ? "Close" : "Open" ); cycleHideButton4OpenUserDELETEImageGrid(HideButton4openUserDELETEImageGrid ? "Close" : "Open");}}
        initial={{
        scale: 0 }}
        animate={{scale: 1,
        rotate:10,
            opacity: 1,
            transition: {type: "spring",
                         stiffness: 20,
                         velocity: 25, 
                         delay: .10, 
                         duration: 0.2 }
          }}
        exit={{y:'10vh',
        scale:0}}>
          
            <div className="ImageGrid-Open-Button">
              
           GALLERY UPLOAD
            </div>
        </motion.div>
        </>
          )}
          </AnimatePresence>

          <AnimatePresence>
        {openUserImageGrid && (
            
          
            <motion.div  
        
            intial={{scale:0, opacity:0}}
            animate={{
            scale: 1,
            opacity: 1,
            transition: {type: "spring",
                         stiffness: 100,
                         velocity: 60, 
                         delay: .20, 
                         duration: 0.1 }
            }}
            exit={{y:'10vh',
            scale:0}}>

            <ImageGrid cycleOpenUserImageGrid={cycleOpenUserImageGrid} openUserImageGrid={openUserImageGrid} cycleHideButton4OpenUserImageGrid={cycleHideButton4OpenUserImageGrid} HideButton4openUserImageGrid={HideButton4openUserImageGrid} cycleHideButton4OpenUserDELETEImageGrid={cycleHideButton4OpenUserDELETEImageGrid} HideButton4openUserDELETEImageGrid={HideButton4openUserDELETEImageGrid}   />
            </motion.div>
            
     
        )}
         </AnimatePresence>   


         <AnimatePresence>
          {HideButton4openUserDELETEImageGrid && (
        <motion.div  whileHover={{rotate:2}}   className='DELETE-ImageGrid-Open-Button-Container' 
        onClick={()=>{cycleOpenUserDELETEImageGrid(openUserDELETEImageGrid ? "Close" : "Open");  cycleHideButton4OpenUserDELETEImageGrid(HideButton4openUserDELETEImageGrid ? "Close" : "Open" );cycleHideButton4OpenUserImageGrid(HideButton4openUserImageGrid ? "Close" : "Open" );}}
        initial={{scale: 0 }}
        animate={{scale: 1,
        rotate:10,
            opacity: 1,
            transition: {type: "spring",
                         stiffness: 20,
                         velocity: 25, 
                         delay: .10, 
                         duration: 0.2 }
          }}
        exit={{y:'10vh',
        scale:0}}>
            <div className="DELETE-ImageGrid-Open-Button">
           GALLERY DELETE
            </div>
       
     
        </motion.div>
   

        
          )}
          </AnimatePresence>
       <AnimatePresence>
{openUserDELETEImageGrid && (
            
          
            <motion.div  
        
            intial={{scale:0, opacity:0}}
            animate={{
            scale: 1,
            opacity: 1,
            transition: {type: "spring",
                         stiffness: 100,
                         velocity: 60, 
                         delay: .20, 
                         duration: 0.1 }
            }}
            exit={{y:'10vh',
            scale:0}}>

            <ImageDeletionGrid cycleOpenUserDELETEImageGrid={ cycleOpenUserDELETEImageGrid} openUserDELETEImageGrid={openUserDELETEImageGrid} cycleHideButton4OpenUserDELETEImageGrid={cycleHideButton4OpenUserDELETEImageGrid} HideButton4openUserDELETEImageGrid={HideButton4openUserDELETEImageGrid} cycleHideButton4OpenUserImageGrid={cycleHideButton4OpenUserImageGrid} HideButton4openUserImageGrid={HideButton4openUserImageGrid}/>
            </motion.div>
            
          
        )}
       </AnimatePresence>
         
       
     
        </div>
    )
}

export default UploadForm
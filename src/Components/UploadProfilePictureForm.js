import React, {useState, useEffect} from 'react';
import ProgressProfilePicture from './ProgressProfilePicture';
import { getAuth ,onAuthStateChanged, updateProfile} from "firebase/auth";
import {getFirestore, getDoc, collection, deleteDoc, doc, query, where, onSnapshot} from 'firebase/firestore'
import useFirestore from '../hooks/UseFirestore'
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Star from '../Assets/Star.svg'
import {useNavigate, Link} from 'react-router-dom'




const UploadProfilePictureForm = ({cycleOpenUpdate, OpenUpdate}) => {
   
 
 
    const [imgs, setIMG] = useState([]);
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const navigate = useNavigate()

    const changeHandler = (e) => {
     
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
            setTimeout(() => {
                cycleOpenUpdate(2)
              }, 4000);
            
           
        } else{
            setFile(null);
            setError(<div className="error-style">'Please select an image file png or jpeg'</div>);

        }

       }

       const nav = () => {

        navigate('/user')
       }



    return (
        <>
      <motion.div initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                   
                    transition={{
                        type: "spring",
                        delay: 3.25}}
                        >

  <motion.img src={Star} className="Logout-Icon " initial={{  scale: 0 }} animate={{  scale: 1 }} whileHover={{scale:1.2, rotate:1.2}} onClick={()=>navigate('/signin')}  />

  </motion.div>
        <label htmlFor="profile-Pic-Update">
        <div className="Update-Profile-Button-Container">
        <div className="Update-Profile-Button">
        <motion.div initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                   
                    transition={{
                        type: "spring",
                        delay: 3.25}}
                        >
          
            <motion.div whileHover={{ scale: 1.3 }} whileTap={{ rotate: 1 }}>
            Update Profile Pic
            </motion.div>
        </motion.div>
      
        </div>
        </div>
        <div className="Update-Blob-Container">
        <motion.div initial={{ scale: 0, rotate: 0}}
                    animate={{ scale: 1, rotate: 360}}
                 
                    transition={{
                        type: "spring",
                        delay: .5,
                        stiffness: 70,
                        damping: 40,
                        velocity: 5}}>
          <motion.div whileHover={{ rotate: 6 }} whileTap={{ rotate: 1 }}>
        <svg  className="Update-Profile-Blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#E868A2" 
            d="M39,-52.7C53.2,-51.6,69.1,-45.2,70.3,-34.5C71.5,-23.7,58,-8.7,51.6,4.5C45.2,17.7,45.9,29.1,41,36.6C36.1,44,25.6,47.6,15.8,47.8C6,47.9,-3.1,44.7,-12.8,42.4C-22.5,40.1,-32.8,38.7,-40.9,33.3C-49,27.8,-54.8,18.3,-54.7,8.8C-54.7,-0.7,-48.8,-10.2,-41.1,-15.3C-33.3,-20.4,-23.7,-21.1,-16.5,-25.4C-9.4,-29.7,-4.7,-37.5,3.9,-43.5C12.4,-49.5,24.8,-53.8,39,-52.7Z" 
            transform="translate(100 100)" />
            </svg>
            </motion.div>
            </motion.div>
         
        </div>
        </label>
        


        <form>

        <div className="Hide-Button">
            <input id="profile-Pic-Update"  type="file" onChange={changeHandler} />
        </div>
  
           
        
            <div className='output'>
            { error && <div className="error">{ error }</div> }
            { file && <div>{ file.name }</div> }
            { file && <ProgressProfilePicture  file={file} setFile={setFile}/> }
            
            </div>
          
        </form>
        </>
    )
}

export default UploadProfilePictureForm 
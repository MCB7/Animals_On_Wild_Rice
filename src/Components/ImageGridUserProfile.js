import {useState, useEffect} from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
import { getAuth } from "firebase/auth";
import {getFirestore, getDoc, collection, deleteDoc, doc, query, where, onSnapshot} from 'firebase/firestore'
import useFirestore from '../hooks/UseFirestore'
import { motion } from 'framer-motion';
import '../index.css';


//THIS IS FOR USERS TO DISPLAY THEIR 'IMAGES' THAT HAVE THEIR ID' AS A FIELD ATTRIBUTE WITHIN THE user images COLLECTION

const ImageGridUserProfile = ({ setSelectedImg, cyclePendingOpen, pendingOpen }) => {
const auth = getAuth()
const user = auth.currentUser;
const stringUser = String(user.uid)

const db = getFirestore()
const colRef = collection(db, 'UserImages')
const q = query(collection(db, 'UserImages'), where("id", "==", stringUser));
const [imgs, setIMG] = useState([]);
    

useEffect(() => {
      onSnapshot(q, (snapshot) => {
      let images = []
      snapshot.docs.forEach(doc => {
        images.push({ ...doc.data(), id: doc.id })

      });
       setIMG(images)
       
     
      })
      }, [setIMG, setSelectedImg])

 
      
      
    return (
        <div className="Profile-img-grid">
            { imgs  && imgs.map(doc => (
              <motion.div className='img-wrap' key={doc.id}
               layout
               whileHover={{ scale: 1.1 }}>
                <motion.img className="Profile-img-grid-IMG-Size" src={doc.url} alt="Animal on Wild Rice"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    onClick={() => cyclePendingOpen(pendingOpen? "Close" : "Open")}
                />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGridUserProfile;

    
import React from 'react';
import useFirestore from '../hooks/UseFirestore'
import {getFirestore, getDoc, setDoc, getDocs, collection, deleteDoc, doc, query, where, onSnapshot, QuerySnapshot, updateDoc,} from 'firebase/firestore'

import { getStorage, ref, deleteObject } from "firebase/storage";
import { motion } from 'framer-motion';



const ImageGrid = ( {cycleOpenUserDELETEImageGrid,OpenUserDELETEImageGrid,cycleHideButton4OpenUserDELETEImageGrid, HideButton4openUserDELETEImageGrid, cycleHideButton4OpenUserImageGrid, HideButton4openUserImageGrid}) => {
   const { docs } = useFirestore('images');
   const db = getFirestore()
   const storage = getStorage();
   const colRef = collection(db, 'comments')
 

   const deleteOneImageDoc = async (docId, docURL) => {

    const taskQuery = query(colRef, where("imgID", "==",`${docId}`))
    const taskDocs = await getDocs(taskQuery)
    taskDocs.forEach((taskDoc) => {
        
         deleteDoc(taskDoc.ref);
     });

    try {
      let docRef = doc(db, `images/${docId}`); 
      let storageRef = ref(storage,  `${docURL}`); 
      await deleteDoc(docRef);
      await deleteObject(storageRef)
    } catch (ex) {
      console.error(`Delete FAILED: ${ex.message}`);
      throw ex;
    }
  };




 
   
    return (
      <>
      <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }} whileHover={{ scale: .75 }} whileTap={{ scale: 0.9 }} className='Back-Button-Container' onClick={()=>{cycleOpenUserDELETEImageGrid(OpenUserDELETEImageGrid ? "Close" : "Open"); cycleHideButton4OpenUserDELETEImageGrid(HideButton4openUserDELETEImageGrid ? "Close" : "Open" );cycleHideButton4OpenUserImageGrid(HideButton4openUserImageGrid ? "Close" : "Open");}}><motion.div className="Back-Button">✘</motion.div></motion.div>
      <div className='ADMIN-grid-container'>
      <div className='ADMIN-overflow'>
            { docs.map(doc => (
              <div key={doc.id}>
              <motion.div className="ADMIN-grid-item"  key={doc.id} layout whileHover={{ scale: .75 }}>
             

                <motion.img className="ADMIN-DELETE-img-grid-IMG-Size" src={doc.url} alt="Animal on Wild Rice"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1 }}
                   onClick={() => deleteOneImageDoc(doc.id, doc.url)}/>

             

               </motion.div>
               </div>
            ))}
        </div>
        </div>
        </>
    )
  
}

export default ImageGrid;
import React from 'react'
import {useState, useEffect} from 'react';
import {render}  from 'react-dom';
import { getAuth } from "firebase/auth";
import ModalComment from './ModalComment.js' 
import { AnimatePresence, motion, useCycle } from "framer-motion"; 
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
import {getFirestore, getDoc, collection, deleteDoc, doc, query, where, onSnapshot, orderBy} from 'firebase/firestore'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import useFirestore from '../hooks/UseFirestore'

const DeleteCommentButton = (docId) => {
    const { docs } = useFirestore('comments');
    const auth = getAuth();
    const user = auth.currentUser;
    const stringUser = String(user.uid)
    const stringID = JSON.stringify(docId)
    console.log(stringID)
    const db = getFirestore()
    const q = query(collection(db, 'comments'), where("id", "==", stringUser));

    const deleteComment = async () => {
      console.log(docId);
        try {
          let docRef = doc(db, `comments/${docId}`);  
          await deleteDoc(docRef);
        } catch (ex) {
          console.error(`Delete FAILED: ${ex.message}`);
          throw ex;
        }
      };
    if (docId != stringUser ) {
      return (
        <div>
           
             
            
                <button key={docId} onClick={() => deleteComment(docId)}>
                 delete   
                </button>
            

                
                
          
        </div>
    )


      } else {
        
      }
}
export default DeleteCommentButton;

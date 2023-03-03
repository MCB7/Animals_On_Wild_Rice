import {useState, useEffect} from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
import { getAuth } from "firebase/auth";
import {getFirestore, getDoc, collection, deleteDoc, doc, query, where, onSnapshot} from 'firebase/firestore'
import useFirestore from '../hooks/UseFirestore'

const useStorageComment = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    const auth = getAuth()
    
    
    const user = auth.currentUser;
    const stringUser = String(user.uid)

    useEffect(() => {
        
        
        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('imageComments');
       //

       
        

        storageRef.put(file).on('state_changed', (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
           
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            const id = stringUser
            collectionRef.add({ url, createdAt, id });
            setUrl(url);
           
        })
     }, [file]);

     return { progress, url, error }
     
}

export default useStorageComment;

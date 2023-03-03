import {useState, useEffect} from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
import { getAuth } from "firebase/auth";
import {getFirestore, getDoc, collection, deleteDoc, doc, query, where, onSnapshot} from 'firebase/firestore'
import useFirestore from '../hooks/UseFirestore'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const [username, setUsername] = useState(null);

    const auth = getAuth()
    const user = auth.currentUser;
    const stringUser = String(user.uid)

    const Username =  user.displayName

   


    
  
    
    // init services
    const db = getFirestore()
    
    // collection ref
    const colRef = collection(db, 'UserImages')
    
    // queries
    const q = query(collection(db, 'UserImages'), where("id", "==", stringUser));



    const [imgs, setIMG] = useState([]);
    
    onSnapshot(q, (snapshot) => {
      let images = []
      snapshot.docs.forEach(doc => {
        images.push({ ...doc.data(), id: doc.id })

      });
       setIMG(images)
       
        // { imgs  && imgs.map(doc => (
        // console.log(doc.url)
        // ))}
      })
    

    


    useEffect(() => {
        
        
        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('UserImages');
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
            const username = Username
            collectionRef.add({ url, createdAt, id, username });
            setUrl(url);
            setUsername(username);
           
        })
     }, [file]);

     return { progress, url, error }
     
}

export default useStorage;


import {useState, useEffect} from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useMainStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const [name, setName] = useState(null);
    
    useEffect(() => {
        
        
        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');
       //
        

        storageRef.put(file).on('state_changed', (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
           
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            const name = await prompt("Who made this?", "");
            collectionRef.add({ url, createdAt, name});
            setUrl(url);
            setName(name)

           
        })
     }, [file]);

     return { progress, url, error, name }
     
}

export default useMainStorage;

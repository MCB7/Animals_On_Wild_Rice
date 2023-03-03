import {useState, useEffect} from 'react';
import { projectStorage, projectFirestore, timestamp,auth } from '../firebase/config';
import { getAuth ,onAuthStateChanged, updateProfile} from "firebase/auth";
import {getFirestore, getDoc, setDoc, getDocs, collection, deleteDoc, doc, query, where, onSnapshot, QuerySnapshot, updateDoc,} from 'firebase/firestore'
import { getStorage, ref, deleteObject } from "firebase/storage";

const useStorageProfilePicture = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

  
    const auth = getAuth()
    const user = auth.currentUser;
    const stringUser = String(user.uid)
    const db = getFirestore()
    const colRef = collection(db, 'comments')

    const currentUrlProfilePic = user.photoURL
    const storage = getStorage();
    
    useEffect(() => {
        
        
        // references
        const storageRef = projectStorage.ref(`profile_Picture/${file.name}`);
       //
       

        storageRef.put(file).on('state_changed', (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
           
            const url = await storageRef.getDownloadURL();
     
        
            setUrl(url);
         

            
            updateProfile(auth.currentUser, {
                photoURL: url
               }).then(() => {
            /// query get doc name use state 
                

            
                async function searchUsername(stringUser){
                    try{
                        const q = query(colRef, where("id", '==', stringUser));
                        const querySnapshot = await getDocs(q);
                        querySnapshot.forEach((doc) => {
                            console.log(doc.id, " => ", doc.data());

                        });
                        }
                        catch(err){
                            console.log(err);
                        }
                };

                const about_me = ({userProfilePic: url})
                const default_pic = 'https://firebasestorage.googleapis.com/v0/b/aowr-2dfb4.appspot.com/o/defaultProfilePicture.png?alt=media&token=7edc8e80-82d9-4244-b0e6-d8314e170438'
           
                async function searchUsername1(stringUser){
                    const taskQuery = query(colRef, where("id", "==", stringUser))
                    const taskDocs = await getDocs(taskQuery)
                    taskDocs.forEach((taskDoc) => {
                        // if URL doesnt match the default pic , delete storage object
                        if (currentUrlProfilePic != default_pic) {

                            let storageRef = ref(storage, currentUrlProfilePic ); 
                            deleteObject(storageRef)
                        }
                       updateDoc(taskDoc.ref, {
                       userProfilePic: url
                      })
                    })
                                    
                }

               
                    
               

                 
    
              console.log('updated!')
              searchUsername(stringUser)
              searchUsername1(stringUser)
            
        
               // ...
               }).catch((error) => {
                console.log(error)
               // ...
               });
            
             


           
        })
     }, [file, url, auth.currentUser,stringUser ]);

     return { progress, url, error}
     
}

export default useStorageProfilePicture ;

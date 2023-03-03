import React from 'react';
import useFirestore from '../hooks/UseFirestore'
import {getFirestore, deleteDoc, doc} from 'firebase/firestore'

import React from 'react';
import useFirestore from '../hooks/UseFirestore'
import {getFirestore, deleteDoc, doc} from 'firebase/firestore'

//docRef creates the reference of the image so it can delete it 
//I can create a component that creates a docRef that then uses that as an attribute of 
//a new collection of COMMENTS, the docRef can be the URL and itll add it as a field along 
//with the USER ID and USER PROFILE PIC URL and COMMENT
//then a display all comments that docRef == URL?  MAYBE DOCUMENT ID ITSELF, instead of url it can copy the documents id check firebase database 


const ImageGrid = ( {  }) => {
   const { docs } = useFirestore('images');
   const db = getFirestore()

   const deleteOneImageDoc = async (docId) => {
    try {
      let docRef = doc(db, `images/${docId}`);  
      await deleteDoc(docRef);
    } catch (ex) {
      console.error(`Delete FAILED: ${ex.message}`);
      throw ex;
    }
  };
 
   
    return (
        <div>
            { docs.map(doc => (
              <div key={doc.id}>
            
                <img src={doc.url} alt="Animal on Wild Rice"
                onClick={() => deleteOneImageDoc(doc.id)}/>
            

                
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;
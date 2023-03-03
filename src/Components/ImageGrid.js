import {useState, useEffect} from 'react';
import useFirestore from '../hooks/UseFirestore'
import { AnimatePresence, motion, useCycle } from "framer-motion"; 
import style from '../styles/Admin-CRUD-style.css'
import { getStorage, ref, uploadString, uploadBytes, UploadTaskSnapshot ,getDownloadURL, deleteObject} from "firebase/storage";
import {getFirestore, deleteDoc, doc} from 'firebase/firestore'
import {projectFirestore, timestamp } from '../firebase/config';


//ImageGrid.js presents all the Images in the UserImages collection for review (ADD TO MAIN GALLERY / DELETE), first 'makeid' is called in UseEffect to create a random name and set it to blobName to be later utilized ==>
//the ADMIN clicks on an image, the SetURLAsync function fires, it takes the image's URL and utlizies a promise callback to set the state of imgURL  ==> 
//then asyncCall calls SetURLAsync in UseEffect so that the imgURL state is updated ==>
// 



const ImageGrid = ( { cycleOpenUserImageGrid, openUserImageGrid, cycleHideButton4OpenUserImageGrid, HideButton4openUserImageGrid, cycleHideButton4OpenUserDELETEImageGrid, HideButton4openUserDELETEImageGrid }) => {
   const { docs } = useFirestore('UserImages');
   const [imgURL, setImgURL] = useState(null);
   const [imgID, setImgID] = useState(null);
   const [imgWidth, setImgWidth] = useState();
   const [imgHeight, setImgHeight] = useState();
   const [blobName, setblobName] = useState();
   const [blobby,  setBlob] = useState(null)
   const storage = getStorage();
   const storageRef = ref(storage, `images/${blobName}`);
   const [blobUrl, setBlobUrl] = useState(null);
   const [userName, setUserName] = useState(false);
   const [AllowDelete, setAllowDelete] = useState(false);
  
   const collectionRef = projectFirestore.collection('images');
   const db = getFirestore()
   const [Loader, setLoader] = useState();

   const [imgCurrentURL, setImgCurrentURL] = useState(null);
   const [imgCurrentID, setImgCurrentID] = useState(null);

 

   const deleteOneImageDoc = async ( docURL, docId) => {

    try {
      let storageRef = ref(storage,  `${docURL}`); 
      let docRef = doc(db, `UserImages/${docId}`); 
      await deleteDoc(docRef);
      await deleteObject(storageRef)
    } catch (ex) {
      console.error(`Delete FAILED: ${ex.message}`);
      throw ex;
    }
  
  };

  const [open, cycleOpen] = useCycle(false, true);
  const DeleteVariant = {
    closed: {
    opacity: 0
    
    },
     open: { opacity: 1 }
    };

    const [openConfirmation, cycleOpenConfirmation] = useCycle(false, true);
    const ConfirmVariant = {
      closed: {
      opacity: 0
      },
       open: { opacity: 1 }
      };


   
  

 useEffect(() => {


    makeid();
    asyncCall();
    CanvasBlob();
    
  

  
  
 
 }, [imgURL, imgHeight, imgWidth ])

    useEffect(() => {
   
      if (blobUrl != null) {

        AddFirestore();
      }
    }, [blobUrl])
    
 useEffect(() => {
  POPup();
  POPout();
  DELETEasyncCall();
 }, [Loader])





 

 //function isCanvasTransparent(canvas) { // true if all pixels Alpha equals to zero
 // var ctx=canvas.getContext("2d");
//  var imageData=ctx.getImageData(0,0,canvas.offsetWidth,canvas.offsetHeight);
//  for(var i=0;i<imageData.data.length;i+=4)
//    if(imageData.data[i+3]!==0)return false;
//  return true;
//}




  

        

function makeid() {
  console.log('makeidCALL')

  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(setblobName(text));
      }, 1000);
    });
}

const  CanvasBlob = async () => {
  console.log('CanvasBlobCALL')
  var canvas = document.getElementById('canvas');
  var canvasContext = canvas.getContext('2d');

  var blankURL = document.getElementById('blank').toDataURL();
  //isCanvasTransparent(canvas)
  canvas.toBlob((blob) => {
    var image = new Image();
    image.src = imgURL;
    image.crossOrigin="anonymous"
    
    image.onload = function () {
      setImgHeight(this.height);
      setImgWidth(this.width);
      
    ;
        var canvasContext = canvas.getContext('2d');
        var wrh = image.width / image.height;
        var newWidth = canvas.width;
        var newHeight = newWidth / wrh;
        if (newHeight > canvas.height) {
          newHeight = canvas.height;
          newWidth = newHeight * wrh;
        }
        var xOffset = newWidth < canvas.width ? ((canvas.width - newWidth) / 2) : 0;
        var yOffset = newHeight < canvas.height ? ((canvas.height - newHeight) / 2) : 0;
       
        canvasContext.drawImage(image, xOffset, yOffset, newWidth, newHeight);
     
      };
      if (imgURL == null && canvas.toDataURL() != blankURL && blobName != 'undefined') {
          
        //uploadCanvas(blob)

        setBlob(blob)
      
        setImgCurrentID(imgID)
        

      }
    });
    };
   
async function AddFirestore() {
  console.log('AddFirestoreCALL')
 
  const url = blobUrl

  const createdAt = timestamp();
  const name = userName;
  collectionRef.add({ url, createdAt, name });
  var canvas = document.getElementById('canvas');
  var canvasContext = canvas.getContext('2d');
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  setLoader(false)
  
  }



const SetURLAsync = (docURL, docID) => {

  console.log('SetURLAsyncCALL')
  

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(setImgURL(docURL));
      
    }, 1000);

    setTimeout(() => {
      resolve(setImgID(docID));
  
    }, 1200);
    console.log(imgID)
  

  
  });
  
}



async function asyncCall() {

  console.log('asyncCALL')

  if (imgURL != null) {
    const result = SetURLAsync();
   
    
  }
      


}

const DELETEAsync = () => {
console.log('DELETEasyncCALL')
return new Promise(resolve => {
    setTimeout(() => {
    resolve(setAllowDelete(true));
  }, 500);
});


}



async function DELETEasyncCall() {
console.log('DELETEasync-callCALL')
if (AllowDelete != false) {
  const result = DELETEAsync();
  setAllowDelete(false)
}
    
}




const POPup = () => {

if (Loader == true)

cycleOpen(1)

}

const POPout = () => {

  if (Loader == false)
  
  cycleOpen(2)
  
  }
  
  
const uploadCanvas =  async (blob) => {
  console.log('uploadCanvasCALL')

  return new Promise(resolve => {
  setTimeout(() => {
    resolve(
      uploadBytes(storageRef, blob).then((snapshot) => {
        console.log('Uploaded a blob or file!') 
        console.log(blobby)
        getDownloadURL(snapshot.ref).then( url =>setBlobUrl(url))
        })); }, 1000);
      
        });
        

        
        }

          
 


 

    return (
<>
      <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }} whileHover={{ scale: .75 }} whileTap={{ scale: 0.9 }} className='Back-Button-Container' onClick={()=>{cycleOpenUserImageGrid(openUserImageGrid ? "Close" : "Open"); cycleHideButton4OpenUserImageGrid(HideButton4openUserImageGrid ? "Close" : "Open" );cycleHideButton4OpenUserDELETEImageGrid(HideButton4openUserDELETEImageGrid ?  "Close" : "Open" )}}><motion.div className="Back-Button">✘</motion.div></motion.div>
        <div className='ADMIN-overflow'>
   
            { docs  && docs.map(doc => (
              <>
              <motion.div className="ADMIN-img-grid"  key={doc.id}
               layout
               whileHover={{ opacity: 1 }}>

                <div onClick={() =>setUserName(doc.username)}>
                <div onClick={() =>  setImgCurrentURL(doc.url)}>
                  
                <motion.img className="ADMIN-img-grid-IMG-Size" id='Image_Transfer'  onClick={()=>{SetURLAsync(doc.url, doc.id); cycleOpenConfirmation(openConfirmation ? "Close" : "Open")}} src={doc.url} alt="Animal on Wild Rice"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .12 }}
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.9 }}
                    
                />
                </div>
                </div>
                
                <div className="ADMIN-img-text-Wrapper">
                <div className="ADMIN-img-text-right">
                  <div onClick={()=>deleteOneImageDoc(doc.url, doc.id)}>
                <motion.div  className='ADMIN-Delete-Confirmation-buttons-colors'
                               whileHover={{ scale: .75 }} whileTap={{ scale: 0.9 }}>DELETE</motion.div> 
                                </div>
                
            
                </div>
               </div>
                </motion.div>
                        
                              

                {open && (

                <motion.div className="ADMIN-Delete-Confirmation"
                  initial={{
                            scale: 0 }}
                  animate={{scale: 7,
                    rotate:720,
                            opacity: 1,
                            transition: {type: "spring",
                                         stiffness: 20,
                                         velocity: 25, 
                                         delay: .10, 
                                         duration: 0.2 }
                          }}
                  exit={{y:'-100vh',
                 opacity:0}}
                 
                  variants={DeleteVariant}
                  >


                <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                        type: "spring",
                                        stiffness: 3,
                                        damping: 5,
                                        velocity: 4,
                                        duration: 0.25,
                                        delay: .25, 
                                        duration: 1 
                                        }}>



<div className="Blue-Blob-4"/>
<div className="Orange-Blob-4"/>
<div className="Sky-Blob-4"/>
<div className="Yellow-Blob-4"/>
<div className="Pink-Blob-3"/>
<div className="lime-Blob-3"/>
<div className="Purple-Blob-3"/>
<div className="Green-Blob-3"/>
<div className="Blue-Blob-3"/>
<div className="Orange-Blob-3"/>
<div className="Sky-Blob-3"/>
<div className="Yellow-Blob-3"/>
<div className="Purple-Blob-2"/>
<div className="Pink-Blob-2"/>
<div className="Green-Blob-2"/>
<div className="Lime-Blob-2"/>
<div className="Blue-Blob-2"/>
<div className="Sky-Blob-2"/>
<div className="Orange-Blob-2"/>
<div className="Yellow-Blob-2"/>
<div className="Purple-Blob"/>
<div className="Pink-Blob"/>
<div className="Green-Blob"/>
<div className="Lime-Blob"/>
<div className="Blue-Blob"/>
<div className="Sky-Blob"/>
<div className="Orange-Blob"/>
<div className="Yellow-Blob"/>


          
            </motion.div>
            </motion.div>
              
            )}
                </>

                
            ))}
 <AnimatePresence>
{openConfirmation && (

<motion.div className="ADMIN-Delete-Confirmation-pop-up-box"
    initial={{scale:0,
      y:'-100vh',
    opacity: 0 }}
animate={{
    y:0,
    scale: 1,
    opacity: 1,
    transition: {  type: "spring",
    stiffness: 25,
    velocity: 25, delay: .10, duration: 0.2 }
}}
exit={{y:'-100vh',
transition: { delay: 0.7, duration: .25 }}}

variants={ConfirmVariant}
>
 
  <motion.div className="ADMIN-Delete-Confirmation-pop-up-box-text"
     initial={{ scale: 0 }}
     animate={{ scale: 1 }}
     transition={{
         type: "spring",
            stiffness: 3,
            damping: 5,
            velocity: 4,
             duration: 0.25,
             delay: .1, 
             duration: .55
            }}>
            Are you sure you want to upload this picture?
          
            
            <div className='ADMIN-Delete-Confirmation-pop-up-box-buttons'>

            <canvas id="canvas"  width={imgWidth} height={imgHeight}/>
           
            <motion.button onClick={() => uploadCanvas(blobby)} className='ADMIN-Delete-Confirmation-pop-up-box-buttons-colors'
             initial={{scale: 0}} animate={{ scale: 1}} 
            whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.9 }}transition={{ delay: .75 }}>
            <div onClick={()=> setLoader(true)}>
            <div onClick={() => cycleOpenConfirmation(openConfirmation ? "Close" : "Open")}><div onClick={()=>deleteOneImageDoc(imgCurrentURL, imgCurrentID)}>YEP</div></div></div></motion.button>
             
             <motion.button className='ADMIN-Delete-Confirmation-pop-up-box-buttons-colors'
              onClick={() => cycleOpenConfirmation(openConfirmation ? "Close" : "Open")}
              initial={{scale: 0}} animate={{ scale: 1}}
            whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.9 }}transition={{ delay: .75 }}
            >NOPE</motion.button> 
            </div>
            </motion.div>
            </motion.div>
              

             )}
             </AnimatePresence>
                            
              

<canvas id="canvas" style={{ backgroundColor:'transparent', display:'none'}} width={imgWidth} height={imgHeight}/>

<canvas id='blank' style={{display:'none'}}></canvas>
      
        



</div>
</>
    )
}

export default ImageGrid;
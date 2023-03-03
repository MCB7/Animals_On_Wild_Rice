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



const ImageGrid = ( {  }) => {
   const { docs } = useFirestore('UserImages');
   const [imgURL, setImgURL] = useState(null);
   const [imgWidth, setImgWidth] = useState();
   const [imgHeight, setImgHeight] = useState();
   const [blobName, setblobName] = useState();
   const [blobby,  setBlob] = useState('')
   const storage = getStorage();
   const storageRef = ref(storage, `images/${blobName}`);
   const [blobUrl, setBlobUrl] = useState(null);
   const [userName, setUserName] = useState(false);
   const [AllowDelete, setAllowDelete] = useState(false);
  
   const collectionRef = projectFirestore.collection('images');
   const db = getFirestore()
  const [Loader, setLoader] = useState();
 

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
 
 }, [Loader])
 
 

 //function isCanvasTransparent(canvas) { // true if all pixels Alpha equals to zero
 // var ctx=canvas.getContext("2d");
//  var imageData=ctx.getImageData(0,0,canvas.offsetWidth,canvas.offsetHeight);
//  for(var i=0;i<imageData.data.length;i+=4)
//    if(imageData.data[i+3]!==0)return false;
//  return true;
//}





const uploadCanvas =  async (blob) => {
  console.log('uploadCanvasCALLED')
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
  
function makeid() {
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
  console.log('CanvasBlobCALLED')
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
          
        uploadCanvas(blob)

        setBlob(blob)
        

      }
    });
    };
   
async function AddFirestore() {
  console.log('FirestoreCalled')
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

 
  

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(setImgURL(docURL));
    }, 1000);

    setTimeout(() => {
      resolve(deleteOneImageDoc(docURL, docID));
    }, 1500);

  
  });
  
}



async function asyncCall() {

  if (imgURL == null) {
    const result = SetURLAsync();
  }
      


}

const DELETEAsync = (docURL, docID) => {

return new Promise(resolve => {



  setTimeout(() => {
    resolve(setAllowDelete(true));
  }, 500);



});

}



async function DELETEasyncCall() {

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
  

 


 

    return (
        <div className='ADMIN-overflow'>

          <div onClick={() => cycleOpen(open ? "Close" : "Open")}>CLICKY</div>
            { docs  && docs.map(doc => (
              <>
              <motion.div className="ADMIN-img-grid"  key={doc.id}
               layout
               whileHover={{ opacity: 1 }}
              
              >
                <div onClick={()=> setLoader(true)}>
                <div onClick={() =>setUserName(doc.username)}>
                <motion.img className="ADMIN-img-grid-IMG-Size" id='Image_Transfer'  onClick={()=>SetURLAsync(doc.url, doc.id)} src={doc.url} alt="Animal on Wild Rice"
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
                               <button class="Btn">Convert</button>
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

<canvas id="canvas" style={{ backgroundColor:'transparent'}} width={imgWidth} height={imgHeight}/>

<canvas id='blank' style={{display:'none'}}></canvas>
      
        



</div>
    )
}

export default ImageGrid;
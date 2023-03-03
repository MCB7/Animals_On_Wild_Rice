import React, {useState, useEffect} from 'react';
import ProgressBar from './ProgressBar';
import Modal from './Modal.js'
import Spritesheet from 'react-responsive-spritesheet';
import upload from '../Assets/uploadbutton-min.png'
import {getFirestore, getDoc, collection, deleteDoc, doc, query, where, onSnapshot} from 'firebase/firestore'
import {auth} from '../firebase/config'


const UserUploadForm = () => {
    //
    const [ selectedImg, setSelectedImg ] = useState(null);
    
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [IMGcap,setIMGcap] = useState(null)

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else{
            setFile(null);
            setError(<div className="error-style">'Please select an image file png or jpeg'</div>);

        }
        
    }

    const ImageCapAlert = () => {
    alert('Exceeded 5 image limit')
    }

    const user = auth.currentUser;
    const stringUser = String(user.uid)
    const db = getFirestore()
    const q = query(collection(db, 'UserImages'), where("id", "==", stringUser));
    useEffect(() => {
        onSnapshot(q, (snapshot) => {
        let images = []
        snapshot.docs.forEach(doc => {
          images.push({ ...doc.data(), id: doc.id })
  
        })
        function resolveAfterHalfSecond() {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve(setIMGcap(images.length));
               
               
              }, 500);
            });
          }
        
          async function asyncCall() {
                  const result = await resolveAfterHalfSecond();
         
            }


         
         

          asyncCall();
         
          
        })
        });
        
        
        

      

    return (
        
        <>
        <label htmlFor="file-upload">
        <div onClick= {()=> {
            if (IMGcap > 5) {
                ImageCapAlert();
                document.getElementById('file-upload').remove();
             
            }
            }}>
        <Spritesheet
        image={upload}
        widthFrame={999}
        heightFrame={449}
        steps={8}
        fps={10}
        autoplay={false}
        loop={true}
        isResponsive={true}
        style={{
            height: '30vh',
            width: '30vw',
            cursor: 'pointer'
        }}
        onClick={Spritesheet => {
            Spritesheet.play();
          
          
          }}
          onLoopComplete={Spritesheet => {
            Spritesheet.goToAndPause(.001)
          }}
        

        />
        </div>
        </label>
        
        <form>
        <div className="Hide-Button">
            <input id="file-upload"  type="file" onChange={changeHandler} />
        </div>
            <div className='output'>
            { error && <div className="error">{ error }</div> }
            { file && <div className="error-style">{ file.name }</div> }
            { file && <ProgressBar file={file} setFile={setFile}/> }
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
            </div>
        </form>
       
        </>
    )
}

export default UserUploadForm
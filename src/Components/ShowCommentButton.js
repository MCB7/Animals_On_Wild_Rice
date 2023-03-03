import React from 'react'
import {Component} from 'react'
import { motion } from 'framer-motion';
import { getAuth } from "firebase/auth";
import useFirestore from '../hooks/UseFirestore'
import '../Gallery-styles.css'
import {  useNavigate } from "react-router-dom";
import  messageIcon from  '../Assets/messageIcon.svg' 

const auth = getAuth();
const user = auth.currentUser;


const HomeButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  }
}

class ShowCommentButton extends Component {

 
    render() {     
    return (

        

        <label htmlFor="PictureID-Comment-Selector">
          <div className='Open-Comment-button-size'>
             <img src={messageIcon} style={{ margin:'1vw', width:'15vw'}} />
             </div>
        </label>

         
        )
       
    }
 
}

class ShowLoginButton extends Component {

    

    render() {     
    return (
   
      <label htmlFor="GOTO-LOGIN" >
   <div style={{cursor:'pointer', fontSize:'5vw', color:'white', margin:'1vw', fontFamily:'Luckiest Guy'}}>Login</div>
      </label>


        )
       
    }
 
}

function Button(){
   
    if(auth.currentUser == null ){
    return(
  <>
    
      <ShowLoginButton    />
  
   
  </>
  
       
    
    )
  }else{
    return (
        <ShowCommentButton />
     
    )
}
}
export default Button
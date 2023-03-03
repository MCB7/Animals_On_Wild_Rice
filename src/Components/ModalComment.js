import React from 'react'
import {render}  from 'react-dom';
import { motion } from 'framer-motion';
import Button from '../Components/ShowCommentButton.js'



const ModalComment = () => {

return (
<motion.div 
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
        type: "spring",
        delay: 2
      }}
      whileHover={{ scale: .85 }}
   >




<Button/>




</motion.div> 


)
}
export default ModalComment;
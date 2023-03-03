import {React, useEffect} from 'react';
import  useStorageProfilePicture from '../hooks/UseStorageProfilePicture.js';
import { motion } from 'framer-motion';


const ProgressProfilePicture = ({ file, setFile }) => {
    const { url, progress } = useStorageProfilePicture(file);
    
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    },[url], setFile)

    return (
        <>
        
        <motion.div className="progress-bar"
        intital={{ width: 0 }}
        animate={{ width: progress + '%' }}

        ></motion.div>

        </> 
    )
}

export default  ProgressProfilePicture;
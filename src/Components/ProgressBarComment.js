import {React, useEffect} from 'react';
import Modal from '../Components/Modal';
import { motion } from 'framer-motion';

const ProgressBarComment = ({ file, setFile }) => {
    const { url, progress } = Modal(file);
    
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    },[url], setFile)

    return (
        <motion.div className="progress-bar"
        intital={{ width: 0 }}
        animate={{ width: progress + '%' }}

        ></motion.div> 
    )
}

export default ProgressBarComment;
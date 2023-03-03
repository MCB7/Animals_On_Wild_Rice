import {React, useEffect} from 'react';
import useStorage from '../hooks/UseStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    },[url], setFile, progress)

    return (
        <motion.div className="progress-bar"
        intital={{ width: 0 }}
        animate={{ width: progress + '%' }}

        ></motion.div> 
    )
}

export default ProgressBar;
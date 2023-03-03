import {React, useEffect} from 'react';
import useMainStorage from '../hooks/UseMainStorage';
import { motion } from 'framer-motion';

const MainProgressBar = ({ file, setFile }) => {
    const { url, progress } = useMainStorage(file);
    
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

export default MainProgressBar;
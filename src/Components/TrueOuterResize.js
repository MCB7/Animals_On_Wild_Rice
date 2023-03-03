import {useState, useLayoutEffect} from 'react'


export default function useWindowSize() {
    
    const [outerSize, setOuterSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
      
        setOuterSize([window.outerWidth, window.outerHeight])
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      
    }, []);
    return outerSize;
  }
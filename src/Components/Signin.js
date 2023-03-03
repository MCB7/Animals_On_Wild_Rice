import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import style from '../styles/AdminSignin-styles.css'
import Star from '../Assets/Star.svg'
import { AnimatePresence, motion, useCycle } from "framer-motion"; 

function Signin() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const history = useNavigate();
  

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if username or password field is empty, return error message
    if (userData.username === "" || userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username/password field",
      }));
    } else if (userData.username == "admin" && userData.password == "123456") {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/upload";
    } else {
      //If credentials entered is invalid
      setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
    }
  };


  return (
    <>
      <AnimatePresence>
  <motion.div initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .25 }} exit={{opacity:0}} className="Blob-Container">

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
    <div className="starAnimation">
    
    <motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .60 }} exit={{opacity:0}} className="star" width="29.633mm" height="25.929mm" version="1.1" viewBox="0 0 29.633 25.929" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-87.237 -119.33)">
  <path d="m101.85 142.61c-1.02-6.5103-3.3475-8.8941-9.5503-9.7816-0.92497-0.13234-1.7317-0.29057-1.7928-0.35164-0.0611-0.0611 0.6362-0.18874 1.5495-0.28374 3.2437-0.33739 5.6365-1.3624 7.1872-3.0788 1.3065-1.4461 1.9291-2.965 2.4724-6.0312l0.4471-2.5233 0.31116 2.1777c0.55282 3.8691 1.7956 6.2392 4.0203 7.6668 1.4025 0.89998 4.798 1.8871 6.4911 1.8871 1.5356 0 1.145 0.16339-1.4634 0.61219-2.5668 0.44165-4.9851 1.4339-6.1211 2.5116-1.574 1.4932-2.6515 4.151-3.0448 7.5106l-0.19539 1.6688z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

    
<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .61 }} exit={{opacity:0}}  className="star-1" width="29.633mm" height="25.929mm" version="1.1" viewBox="0 0 29.633 25.929" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-87.237 -119.33)">
  <path d="m101.85 142.61c-1.02-6.5103-3.3475-8.8941-9.5503-9.7816-0.92497-0.13234-1.7317-0.29057-1.7928-0.35164-0.0611-0.0611 0.6362-0.18874 1.5495-0.28374 3.2437-0.33739 5.6365-1.3624 7.1872-3.0788 1.3065-1.4461 1.9291-2.965 2.4724-6.0312l0.4471-2.5233 0.31116 2.1777c0.55282 3.8691 1.7956 6.2392 4.0203 7.6668 1.4025 0.89998 4.798 1.8871 6.4911 1.8871 1.5356 0 1.145 0.16339-1.4634 0.61219-2.5668 0.44165-4.9851 1.4339-6.1211 2.5116-1.574 1.4932-2.6515 4.151-3.0448 7.5106l-0.19539 1.6688z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .62 }} exit={{opacity:0}} className="star-2" width="29.633mm" height="25.929mm" version="1.1" viewBox="0 0 29.633 25.929" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-87.237 -119.33)">
  <path d="m101.85 142.61c-1.02-6.5103-3.3475-8.8941-9.5503-9.7816-0.92497-0.13234-1.7317-0.29057-1.7928-0.35164-0.0611-0.0611 0.6362-0.18874 1.5495-0.28374 3.2437-0.33739 5.6365-1.3624 7.1872-3.0788 1.3065-1.4461 1.9291-2.965 2.4724-6.0312l0.4471-2.5233 0.31116 2.1777c0.55282 3.8691 1.7956 6.2392 4.0203 7.6668 1.4025 0.89998 4.798 1.8871 6.4911 1.8871 1.5356 0 1.145 0.16339-1.4634 0.61219-2.5668 0.44165-4.9851 1.4339-6.1211 2.5116-1.574 1.4932-2.6515 4.151-3.0448 7.5106l-0.19539 1.6688z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .63 }} exit={{opacity:0}}  className="star-2-clone" width="29.633mm" height="25.929mm" version="1.1" viewBox="0 0 29.633 25.929" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-87.237 -119.33)">
  <path d="m101.85 142.61c-1.02-6.5103-3.3475-8.8941-9.5503-9.7816-0.92497-0.13234-1.7317-0.29057-1.7928-0.35164-0.0611-0.0611 0.6362-0.18874 1.5495-0.28374 3.2437-0.33739 5.6365-1.3624 7.1872-3.0788 1.3065-1.4461 1.9291-2.965 2.4724-6.0312l0.4471-2.5233 0.31116 2.1777c0.55282 3.8691 1.7956 6.2392 4.0203 7.6668 1.4025 0.89998 4.798 1.8871 6.4911 1.8871 1.5356 0 1.145 0.16339-1.4634 0.61219-2.5668 0.44165-4.9851 1.4339-6.1211 2.5116-1.574 1.4932-2.6515 4.151-3.0448 7.5106l-0.19539 1.6688z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .64 }} exit={{opacity:0}}  className="star-2-clone-2" width="29.633mm" height="25.929mm" version="1.1" viewBox="0 0 29.633 25.929" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-87.237 -119.33)">
  <path d="m101.85 142.61c-1.02-6.5103-3.3475-8.8941-9.5503-9.7816-0.92497-0.13234-1.7317-0.29057-1.7928-0.35164-0.0611-0.0611 0.6362-0.18874 1.5495-0.28374 3.2437-0.33739 5.6365-1.3624 7.1872-3.0788 1.3065-1.4461 1.9291-2.965 2.4724-6.0312l0.4471-2.5233 0.31116 2.1777c0.55282 3.8691 1.7956 6.2392 4.0203 7.6668 1.4025 0.89998 4.798 1.8871 6.4911 1.8871 1.5356 0 1.145 0.16339-1.4634 0.61219-2.5668 0.44165-4.9851 1.4339-6.1211 2.5116-1.574 1.4932-2.6515 4.151-3.0448 7.5106l-0.19539 1.6688z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .65 }} exit={{opacity:0}}  className="star-2-clone-3" width="29.633mm" height="25.929mm" version="1.1" viewBox="0 0 29.633 25.929" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-87.237 -119.33)">
  <path d="m101.85 142.61c-1.02-6.5103-3.3475-8.8941-9.5503-9.7816-0.92497-0.13234-1.7317-0.29057-1.7928-0.35164-0.0611-0.0611 0.6362-0.18874 1.5495-0.28374 3.2437-0.33739 5.6365-1.3624 7.1872-3.0788 1.3065-1.4461 1.9291-2.965 2.4724-6.0312l0.4471-2.5233 0.31116 2.1777c0.55282 3.8691 1.7956 6.2392 4.0203 7.6668 1.4025 0.89998 4.798 1.8871 6.4911 1.8871 1.5356 0 1.145 0.16339-1.4634 0.61219-2.5668 0.44165-4.9851 1.4339-6.1211 2.5116-1.574 1.4932-2.6515 4.151-3.0448 7.5106l-0.19539 1.6688z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>
<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .66 }} exit={{opacity:0}} className="star-3" width="29.633mm" height="25.929mm" version="1.1" viewBox="0 0 29.633 25.929" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-87.237 -119.33)">
  <path d="m101.85 142.61c-1.02-6.5103-3.3475-8.8941-9.5503-9.7816-0.92497-0.13234-1.7317-0.29057-1.7928-0.35164-0.0611-0.0611 0.6362-0.18874 1.5495-0.28374 3.2437-0.33739 5.6365-1.3624 7.1872-3.0788 1.3065-1.4461 1.9291-2.965 2.4724-6.0312l0.4471-2.5233 0.31116 2.1777c0.55282 3.8691 1.7956 6.2392 4.0203 7.6668 1.4025 0.89998 4.798 1.8871 6.4911 1.8871 1.5356 0 1.145 0.16339-1.4634 0.61219-2.5668 0.44165-4.9851 1.4339-6.1211 2.5116-1.574 1.4932-2.6515 4.151-3.0448 7.5106l-0.19539 1.6688z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .67 }} exit={{opacity:0}}  className="star-3-clone" width="29.633mm" height="25.929mm" version="1.1" viewBox="0 0 29.633 25.929" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-87.237 -119.33)">
  <path d="m101.85 142.61c-1.02-6.5103-3.3475-8.8941-9.5503-9.7816-0.92497-0.13234-1.7317-0.29057-1.7928-0.35164-0.0611-0.0611 0.6362-0.18874 1.5495-0.28374 3.2437-0.33739 5.6365-1.3624 7.1872-3.0788 1.3065-1.4461 1.9291-2.965 2.4724-6.0312l0.4471-2.5233 0.31116 2.1777c0.55282 3.8691 1.7956 6.2392 4.0203 7.6668 1.4025 0.89998 4.798 1.8871 6.4911 1.8871 1.5356 0 1.145 0.16339-1.4634 0.61219-2.5668 0.44165-4.9851 1.4339-6.1211 2.5116-1.574 1.4932-2.6515 4.151-3.0448 7.5106l-0.19539 1.6688z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .68}} exit={{opacity:0}}  className="star-3-clone-2" width="29.633mm" height="25.929mm" version="1.1" viewBox="0 0 29.633 25.929" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-87.237 -119.33)">
  <path d="m101.85 142.61c-1.02-6.5103-3.3475-8.8941-9.5503-9.7816-0.92497-0.13234-1.7317-0.29057-1.7928-0.35164-0.0611-0.0611 0.6362-0.18874 1.5495-0.28374 3.2437-0.33739 5.6365-1.3624 7.1872-3.0788 1.3065-1.4461 1.9291-2.965 2.4724-6.0312l0.4471-2.5233 0.31116 2.1777c0.55282 3.8691 1.7956 6.2392 4.0203 7.6668 1.4025 0.89998 4.798 1.8871 6.4911 1.8871 1.5356 0 1.145 0.16339-1.4634 0.61219-2.5668 0.44165-4.9851 1.4339-6.1211 2.5116-1.574 1.4932-2.6515 4.151-3.0448 7.5106l-0.19539 1.6688z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .68 }} exit={{opacity:0}}  className="star-3-clone-3" width="29.633mm" height="25.929mm" version="1.1" viewBox="0 0 29.633 25.929" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-87.237 -119.33)">
  <path d="m101.85 142.61c-1.02-6.5103-3.3475-8.8941-9.5503-9.7816-0.92497-0.13234-1.7317-0.29057-1.7928-0.35164-0.0611-0.0611 0.6362-0.18874 1.5495-0.28374 3.2437-0.33739 5.6365-1.3624 7.1872-3.0788 1.3065-1.4461 1.9291-2.965 2.4724-6.0312l0.4471-2.5233 0.31116 2.1777c0.55282 3.8691 1.7956 6.2392 4.0203 7.6668 1.4025 0.89998 4.798 1.8871 6.4911 1.8871 1.5356 0 1.145 0.16339-1.4634 0.61219-2.5668 0.44165-4.9851 1.4339-6.1211 2.5116-1.574 1.4932-2.6515 4.151-3.0448 7.5106l-0.19539 1.6688z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .69 }} exit={{opacity:0}}  className="star-3-clone-4" width="29.633mm" height="25.929mm" version="1.1" viewBox="0 0 29.633 25.929" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-87.237 -119.33)">
  <path d="m101.85 142.61c-1.02-6.5103-3.3475-8.8941-9.5503-9.7816-0.92497-0.13234-1.7317-0.29057-1.7928-0.35164-0.0611-0.0611 0.6362-0.18874 1.5495-0.28374 3.2437-0.33739 5.6365-1.3624 7.1872-3.0788 1.3065-1.4461 1.9291-2.965 2.4724-6.0312l0.4471-2.5233 0.31116 2.1777c0.55282 3.8691 1.7956 6.2392 4.0203 7.6668 1.4025 0.89998 4.798 1.8871 6.4911 1.8871 1.5356 0 1.145 0.16339-1.4634 0.61219-2.5668 0.44165-4.9851 1.4339-6.1211 2.5116-1.574 1.4932-2.6515 4.151-3.0448 7.5106l-0.19539 1.6688z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .70 }} exit={{opacity:0}}  className="star-3-clone-5" width="29.633mm" height="25.929mm" version="1.1" viewBox="0 0 29.633 25.929" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-87.237 -119.33)">
  <path d="m101.85 142.61c-1.02-6.5103-3.3475-8.8941-9.5503-9.7816-0.92497-0.13234-1.7317-0.29057-1.7928-0.35164-0.0611-0.0611 0.6362-0.18874 1.5495-0.28374 3.2437-0.33739 5.6365-1.3624 7.1872-3.0788 1.3065-1.4461 1.9291-2.965 2.4724-6.0312l0.4471-2.5233 0.31116 2.1777c0.55282 3.8691 1.7956 6.2392 4.0203 7.6668 1.4025 0.89998 4.798 1.8871 6.4911 1.8871 1.5356 0 1.145 0.16339-1.4634 0.61219-2.5668 0.44165-4.9851 1.4339-6.1211 2.5116-1.574 1.4932-2.6515 4.151-3.0448 7.5106l-0.19539 1.6688z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .71 }} exit={{opacity:0}}  className="star-3-clone-6" width="29.633mm" height="25.929mm" version="1.1" viewBox="0 0 29.633 25.929" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-87.237 -119.33)">
  <path d="m101.85 142.61c-1.02-6.5103-3.3475-8.8941-9.5503-9.7816-0.92497-0.13234-1.7317-0.29057-1.7928-0.35164-0.0611-0.0611 0.6362-0.18874 1.5495-0.28374 3.2437-0.33739 5.6365-1.3624 7.1872-3.0788 1.3065-1.4461 1.9291-2.965 2.4724-6.0312l0.4471-2.5233 0.31116 2.1777c0.55282 3.8691 1.7956 6.2392 4.0203 7.6668 1.4025 0.89998 4.798 1.8871 6.4911 1.8871 1.5356 0 1.145 0.16339-1.4634 0.61219-2.5668 0.44165-4.9851 1.4339-6.1211 2.5116-1.574 1.4932-2.6515 4.151-3.0448 7.5106l-0.19539 1.6688z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .72 }} exit={{opacity:0}}  className="star-3-clone-7" width="29.633mm" height="25.929mm" version="1.1" viewBox="0 0 29.633 25.929" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-87.237 -119.33)">
  <path d="m101.85 142.61c-1.02-6.5103-3.3475-8.8941-9.5503-9.7816-0.92497-0.13234-1.7317-0.29057-1.7928-0.35164-0.0611-0.0611 0.6362-0.18874 1.5495-0.28374 3.2437-0.33739 5.6365-1.3624 7.1872-3.0788 1.3065-1.4461 1.9291-2.965 2.4724-6.0312l0.4471-2.5233 0.31116 2.1777c0.55282 3.8691 1.7956 6.2392 4.0203 7.6668 1.4025 0.89998 4.798 1.8871 6.4911 1.8871 1.5356 0 1.145 0.16339-1.4634 0.61219-2.5668 0.44165-4.9851 1.4339-6.1211 2.5116-1.574 1.4932-2.6515 4.151-3.0448 7.5106l-0.19539 1.6688z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .73 }} exit={{opacity:0}}  className="star-3-clone-8" width="29.633mm" height="25.929mm" version="1.1" viewBox="0 0 29.633 25.929" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-87.237 -119.33)">
  <path d="m101.85 142.61c-1.02-6.5103-3.3475-8.8941-9.5503-9.7816-0.92497-0.13234-1.7317-0.29057-1.7928-0.35164-0.0611-0.0611 0.6362-0.18874 1.5495-0.28374 3.2437-0.33739 5.6365-1.3624 7.1872-3.0788 1.3065-1.4461 1.9291-2.965 2.4724-6.0312l0.4471-2.5233 0.31116 2.1777c0.55282 3.8691 1.7956 6.2392 4.0203 7.6668 1.4025 0.89998 4.798 1.8871 6.4911 1.8871 1.5356 0 1.145 0.16339-1.4634 0.61219-2.5668 0.44165-4.9851 1.4339-6.1211 2.5116-1.574 1.4932-2.6515 4.151-3.0448 7.5106l-0.19539 1.6688z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .74 }} exit={{opacity:0}}  className="star-3-clone-9" width="29.633mm" height="25.929mm" version="1.1" viewBox="0 0 29.633 25.929" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-87.237 -119.33)">
  <path d="m101.85 142.61c-1.02-6.5103-3.3475-8.8941-9.5503-9.7816-0.92497-0.13234-1.7317-0.29057-1.7928-0.35164-0.0611-0.0611 0.6362-0.18874 1.5495-0.28374 3.2437-0.33739 5.6365-1.3624 7.1872-3.0788 1.3065-1.4461 1.9291-2.965 2.4724-6.0312l0.4471-2.5233 0.31116 2.1777c0.55282 3.8691 1.7956 6.2392 4.0203 7.6668 1.4025 0.89998 4.798 1.8871 6.4911 1.8871 1.5356 0 1.145 0.16339-1.4634 0.61219-2.5668 0.44165-4.9851 1.4339-6.1211 2.5116-1.574 1.4932-2.6515 4.151-3.0448 7.5106l-0.19539 1.6688z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .75 }} exit={{opacity:0}}  className="star-4" width="29.633mm" height="25.929mm" version="1.1" viewBox="0 0 29.633 25.929" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-87.237 -119.33)">
  <path d="m101.85 142.61c-1.02-6.5103-3.3475-8.8941-9.5503-9.7816-0.92497-0.13234-1.7317-0.29057-1.7928-0.35164-0.0611-0.0611 0.6362-0.18874 1.5495-0.28374 3.2437-0.33739 5.6365-1.3624 7.1872-3.0788 1.3065-1.4461 1.9291-2.965 2.4724-6.0312l0.4471-2.5233 0.31116 2.1777c0.55282 3.8691 1.7956 6.2392 4.0203 7.6668 1.4025 0.89998 4.798 1.8871 6.4911 1.8871 1.5356 0 1.145 0.16339-1.4634 0.61219-2.5668 0.44165-4.9851 1.4339-6.1211 2.5116-1.574 1.4932-2.6515 4.151-3.0448 7.5106l-0.19539 1.6688z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .76 }} exit={{opacity:0}}  className="star-5" width="21.74mm" height="22.632mm" version="1.1" viewBox="0 0 21.74 22.632" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-94.503 -135.91)">
  <path d="m105.15 158.54c-0.0289-0.0728-0.19857-2.4196-0.37696-5.2152-0.17839-2.7956-0.40018-5.1588-0.49288-5.2515s-2.4686-0.31455-5.2799-0.493c-2.8112-0.17844-4.8137-0.39746-4.4499-0.48671 0.3638-0.0892 2.662-0.27519 5.1072-0.41321 2.4452-0.13801 4.5214-0.32662 4.6139-0.41912s0.31154-2.4348 0.48676-5.2052c0.17521-2.7703 0.3675-5.0859 0.42731-5.1457 0.0598-0.0598 0.24245 2.2205 0.40587 5.0674s0.36222 5.2413 0.44178 5.3208c0.0796 0.0796 2.3803 0.29061 5.1127 0.46899 2.7324 0.17838 5.0275 0.356 5.1003 0.39471 0.0728 0.0387-2.1678 0.22159-4.979 0.40641-2.8112 0.18481-5.1699 0.39454-5.2414 0.46607-0.0715 0.0715-0.286 2.4942-0.4766 5.3838-0.19061 2.8896-0.37024 5.1942-0.39918 5.1215z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .77 }} exit={{opacity:0}}  className="star-6" width="21.74mm" height="22.632mm" version="1.1" viewBox="0 0 21.74 22.632" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-94.503 -135.91)">
  <path d="m105.15 158.54c-0.0289-0.0728-0.19857-2.4196-0.37696-5.2152-0.17839-2.7956-0.40018-5.1588-0.49288-5.2515s-2.4686-0.31455-5.2799-0.493c-2.8112-0.17844-4.8137-0.39746-4.4499-0.48671 0.3638-0.0892 2.662-0.27519 5.1072-0.41321 2.4452-0.13801 4.5214-0.32662 4.6139-0.41912s0.31154-2.4348 0.48676-5.2052c0.17521-2.7703 0.3675-5.0859 0.42731-5.1457 0.0598-0.0598 0.24245 2.2205 0.40587 5.0674s0.36222 5.2413 0.44178 5.3208c0.0796 0.0796 2.3803 0.29061 5.1127 0.46899 2.7324 0.17838 5.0275 0.356 5.1003 0.39471 0.0728 0.0387-2.1678 0.22159-4.979 0.40641-2.8112 0.18481-5.1699 0.39454-5.2414 0.46607-0.0715 0.0715-0.286 2.4942-0.4766 5.3838-0.19061 2.8896-0.37024 5.1942-0.39918 5.1215z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .78 }} exit={{opacity:0}}  className="star-7" width="21.74mm" height="22.632mm" version="1.1" viewBox="0 0 21.74 22.632" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-94.503 -135.91)">
  <path d="m105.15 158.54c-0.0289-0.0728-0.19857-2.4196-0.37696-5.2152-0.17839-2.7956-0.40018-5.1588-0.49288-5.2515s-2.4686-0.31455-5.2799-0.493c-2.8112-0.17844-4.8137-0.39746-4.4499-0.48671 0.3638-0.0892 2.662-0.27519 5.1072-0.41321 2.4452-0.13801 4.5214-0.32662 4.6139-0.41912s0.31154-2.4348 0.48676-5.2052c0.17521-2.7703 0.3675-5.0859 0.42731-5.1457 0.0598-0.0598 0.24245 2.2205 0.40587 5.0674s0.36222 5.2413 0.44178 5.3208c0.0796 0.0796 2.3803 0.29061 5.1127 0.46899 2.7324 0.17838 5.0275 0.356 5.1003 0.39471 0.0728 0.0387-2.1678 0.22159-4.979 0.40641-2.8112 0.18481-5.1699 0.39454-5.2414 0.46607-0.0715 0.0715-0.286 2.4942-0.4766 5.3838-0.19061 2.8896-0.37024 5.1942-0.39918 5.1215z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .79 }} exit={{opacity:0}}  className="star-8" width="20.509mm" height="20.665mm" version="1.1" viewBox="0 0 20.509 20.665" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-96.458 -137.31)">
  <path d="m106.46 157.82c-0.039-0.65484-0.1461-2.7916-0.23806-4.7484l-0.16718-3.5578-2.8755 3.624c-1.5815 1.9932-2.9222 3.624-2.9793 3.624-0.0571 0 1.0289-1.6965 2.4133-3.77 1.3844-2.0735 2.4274-3.7975 2.3178-3.831-0.10957-0.0335-2.0437 0.46344-4.2981 1.1043-2.2544 0.64088-4.1313 1.1329-4.1708 1.0933-0.03955-0.0395 1.8285-0.77473 4.1513-1.6337 2.3227-0.85901 4.1401-1.6347 4.0385-1.7237-0.10156-0.089-1.9437-0.80245-4.0936-1.5854-2.1499-0.78292-3.8168-1.4527-3.7042-1.4883 0.11265-0.0357 1.9907 0.44994 4.1736 1.0791 2.1828 0.62915 4.0071 1.1151 4.0539 1.0799 0.0468-0.0352-0.97069-1.6528-2.2612-3.5948-2.7129-4.0824-2.7824-4.1922-2.6521-4.1922 0.0538 0 1.3408 1.6006 2.8599 3.5568s2.8513 3.5636 2.9604 3.5719c0.10914 8e-3 0.21322-1.2053 0.2313-2.6969 0.0181-1.4916 0.11841-3.5454 0.22296-4.5641l0.19009-1.8521 0.0745 2.7781c0.041 1.528 0.149 3.5994 0.24006 4.6031l0.16558 1.8249 2.7397-3.4786c1.5069-1.9132 2.7889-3.4786 2.849-3.4786 0.0601 0-0.94275 1.5776-2.2285 3.5057-1.2857 1.9282-2.4206 3.6458-2.5219 3.8171-0.11964 0.20225 0.44296 0.13429 1.6054-0.19394 5.8491-1.6516 7.3493-2.0543 7.4134-1.9902 0.0394 0.0393-1.8401 0.76432-4.1765 1.611-2.3364 0.84673-4.2992 1.6224-4.3618 1.7236-0.0626 0.10127 1.7895 0.87388 4.1158 1.7169s4.1927 1.5696 4.1477 1.6147c-0.045 0.045-1.9743-0.44662-4.2873-1.0926s-4.2519-1.128-4.3087-1.0712c-0.0859 0.0859 1.2417 2.1635 4.5298 7.0888 1.1214 1.6798 0.0831 0.50245-2.627-2.9787-1.589-2.0411-2.9229-3.5538-2.9642-3.3614-0.0413 0.19232-0.17232 2.3088-0.29112 4.7033-0.11881 2.3945-0.2479 3.8179-0.28687 3.163z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .80 }} exit={{opacity:0}}  className="star-9" width="20.509mm" height="20.665mm" version="1.1" viewBox="0 0 20.509 20.665" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-96.458 -137.31)">
  <path d="m106.46 157.82c-0.039-0.65484-0.1461-2.7916-0.23806-4.7484l-0.16718-3.5578-2.8755 3.624c-1.5815 1.9932-2.9222 3.624-2.9793 3.624-0.0571 0 1.0289-1.6965 2.4133-3.77 1.3844-2.0735 2.4274-3.7975 2.3178-3.831-0.10957-0.0335-2.0437 0.46344-4.2981 1.1043-2.2544 0.64088-4.1313 1.1329-4.1708 1.0933-0.03955-0.0395 1.8285-0.77473 4.1513-1.6337 2.3227-0.85901 4.1401-1.6347 4.0385-1.7237-0.10156-0.089-1.9437-0.80245-4.0936-1.5854-2.1499-0.78292-3.8168-1.4527-3.7042-1.4883 0.11265-0.0357 1.9907 0.44994 4.1736 1.0791 2.1828 0.62915 4.0071 1.1151 4.0539 1.0799 0.0468-0.0352-0.97069-1.6528-2.2612-3.5948-2.7129-4.0824-2.7824-4.1922-2.6521-4.1922 0.0538 0 1.3408 1.6006 2.8599 3.5568s2.8513 3.5636 2.9604 3.5719c0.10914 8e-3 0.21322-1.2053 0.2313-2.6969 0.0181-1.4916 0.11841-3.5454 0.22296-4.5641l0.19009-1.8521 0.0745 2.7781c0.041 1.528 0.149 3.5994 0.24006 4.6031l0.16558 1.8249 2.7397-3.4786c1.5069-1.9132 2.7889-3.4786 2.849-3.4786 0.0601 0-0.94275 1.5776-2.2285 3.5057-1.2857 1.9282-2.4206 3.6458-2.5219 3.8171-0.11964 0.20225 0.44296 0.13429 1.6054-0.19394 5.8491-1.6516 7.3493-2.0543 7.4134-1.9902 0.0394 0.0393-1.8401 0.76432-4.1765 1.611-2.3364 0.84673-4.2992 1.6224-4.3618 1.7236-0.0626 0.10127 1.7895 0.87388 4.1158 1.7169s4.1927 1.5696 4.1477 1.6147c-0.045 0.045-1.9743-0.44662-4.2873-1.0926s-4.2519-1.128-4.3087-1.0712c-0.0859 0.0859 1.2417 2.1635 4.5298 7.0888 1.1214 1.6798 0.0831 0.50245-2.627-2.9787-1.589-2.0411-2.9229-3.5538-2.9642-3.3614-0.0413 0.19232-0.17232 2.3088-0.29112 4.7033-0.11881 2.3945-0.2479 3.8179-0.28687 3.163z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .81 }} exit={{opacity:0}}  className="star-10" width="20.509mm" height="20.665mm" version="1.1" viewBox="0 0 20.509 20.665" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-96.458 -137.31)">
  <path d="m106.46 157.82c-0.039-0.65484-0.1461-2.7916-0.23806-4.7484l-0.16718-3.5578-2.8755 3.624c-1.5815 1.9932-2.9222 3.624-2.9793 3.624-0.0571 0 1.0289-1.6965 2.4133-3.77 1.3844-2.0735 2.4274-3.7975 2.3178-3.831-0.10957-0.0335-2.0437 0.46344-4.2981 1.1043-2.2544 0.64088-4.1313 1.1329-4.1708 1.0933-0.03955-0.0395 1.8285-0.77473 4.1513-1.6337 2.3227-0.85901 4.1401-1.6347 4.0385-1.7237-0.10156-0.089-1.9437-0.80245-4.0936-1.5854-2.1499-0.78292-3.8168-1.4527-3.7042-1.4883 0.11265-0.0357 1.9907 0.44994 4.1736 1.0791 2.1828 0.62915 4.0071 1.1151 4.0539 1.0799 0.0468-0.0352-0.97069-1.6528-2.2612-3.5948-2.7129-4.0824-2.7824-4.1922-2.6521-4.1922 0.0538 0 1.3408 1.6006 2.8599 3.5568s2.8513 3.5636 2.9604 3.5719c0.10914 8e-3 0.21322-1.2053 0.2313-2.6969 0.0181-1.4916 0.11841-3.5454 0.22296-4.5641l0.19009-1.8521 0.0745 2.7781c0.041 1.528 0.149 3.5994 0.24006 4.6031l0.16558 1.8249 2.7397-3.4786c1.5069-1.9132 2.7889-3.4786 2.849-3.4786 0.0601 0-0.94275 1.5776-2.2285 3.5057-1.2857 1.9282-2.4206 3.6458-2.5219 3.8171-0.11964 0.20225 0.44296 0.13429 1.6054-0.19394 5.8491-1.6516 7.3493-2.0543 7.4134-1.9902 0.0394 0.0393-1.8401 0.76432-4.1765 1.611-2.3364 0.84673-4.2992 1.6224-4.3618 1.7236-0.0626 0.10127 1.7895 0.87388 4.1158 1.7169s4.1927 1.5696 4.1477 1.6147c-0.045 0.045-1.9743-0.44662-4.2873-1.0926s-4.2519-1.128-4.3087-1.0712c-0.0859 0.0859 1.2417 2.1635 4.5298 7.0888 1.1214 1.6798 0.0831 0.50245-2.627-2.9787-1.589-2.0411-2.9229-3.5538-2.9642-3.3614-0.0413 0.19232-0.17232 2.3088-0.29112 4.7033-0.11881 2.3945-0.2479 3.8179-0.28687 3.163z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .82 }} exit={{opacity:0}}  className="star-10-clone" width="20.509mm" height="20.665mm" version="1.1" viewBox="0 0 20.509 20.665" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-96.458 -137.31)">
  <path d="m106.46 157.82c-0.039-0.65484-0.1461-2.7916-0.23806-4.7484l-0.16718-3.5578-2.8755 3.624c-1.5815 1.9932-2.9222 3.624-2.9793 3.624-0.0571 0 1.0289-1.6965 2.4133-3.77 1.3844-2.0735 2.4274-3.7975 2.3178-3.831-0.10957-0.0335-2.0437 0.46344-4.2981 1.1043-2.2544 0.64088-4.1313 1.1329-4.1708 1.0933-0.03955-0.0395 1.8285-0.77473 4.1513-1.6337 2.3227-0.85901 4.1401-1.6347 4.0385-1.7237-0.10156-0.089-1.9437-0.80245-4.0936-1.5854-2.1499-0.78292-3.8168-1.4527-3.7042-1.4883 0.11265-0.0357 1.9907 0.44994 4.1736 1.0791 2.1828 0.62915 4.0071 1.1151 4.0539 1.0799 0.0468-0.0352-0.97069-1.6528-2.2612-3.5948-2.7129-4.0824-2.7824-4.1922-2.6521-4.1922 0.0538 0 1.3408 1.6006 2.8599 3.5568s2.8513 3.5636 2.9604 3.5719c0.10914 8e-3 0.21322-1.2053 0.2313-2.6969 0.0181-1.4916 0.11841-3.5454 0.22296-4.5641l0.19009-1.8521 0.0745 2.7781c0.041 1.528 0.149 3.5994 0.24006 4.6031l0.16558 1.8249 2.7397-3.4786c1.5069-1.9132 2.7889-3.4786 2.849-3.4786 0.0601 0-0.94275 1.5776-2.2285 3.5057-1.2857 1.9282-2.4206 3.6458-2.5219 3.8171-0.11964 0.20225 0.44296 0.13429 1.6054-0.19394 5.8491-1.6516 7.3493-2.0543 7.4134-1.9902 0.0394 0.0393-1.8401 0.76432-4.1765 1.611-2.3364 0.84673-4.2992 1.6224-4.3618 1.7236-0.0626 0.10127 1.7895 0.87388 4.1158 1.7169s4.1927 1.5696 4.1477 1.6147c-0.045 0.045-1.9743-0.44662-4.2873-1.0926s-4.2519-1.128-4.3087-1.0712c-0.0859 0.0859 1.2417 2.1635 4.5298 7.0888 1.1214 1.6798 0.0831 0.50245-2.627-2.9787-1.589-2.0411-2.9229-3.5538-2.9642-3.3614-0.0413 0.19232-0.17232 2.3088-0.29112 4.7033-0.11881 2.3945-0.2479 3.8179-0.28687 3.163z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .83 }} exit={{opacity:0}}  className="star-10-clone-2" width="20.509mm" height="20.665mm" version="1.1" viewBox="0 0 20.509 20.665" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-96.458 -137.31)">
  <path d="m106.46 157.82c-0.039-0.65484-0.1461-2.7916-0.23806-4.7484l-0.16718-3.5578-2.8755 3.624c-1.5815 1.9932-2.9222 3.624-2.9793 3.624-0.0571 0 1.0289-1.6965 2.4133-3.77 1.3844-2.0735 2.4274-3.7975 2.3178-3.831-0.10957-0.0335-2.0437 0.46344-4.2981 1.1043-2.2544 0.64088-4.1313 1.1329-4.1708 1.0933-0.03955-0.0395 1.8285-0.77473 4.1513-1.6337 2.3227-0.85901 4.1401-1.6347 4.0385-1.7237-0.10156-0.089-1.9437-0.80245-4.0936-1.5854-2.1499-0.78292-3.8168-1.4527-3.7042-1.4883 0.11265-0.0357 1.9907 0.44994 4.1736 1.0791 2.1828 0.62915 4.0071 1.1151 4.0539 1.0799 0.0468-0.0352-0.97069-1.6528-2.2612-3.5948-2.7129-4.0824-2.7824-4.1922-2.6521-4.1922 0.0538 0 1.3408 1.6006 2.8599 3.5568s2.8513 3.5636 2.9604 3.5719c0.10914 8e-3 0.21322-1.2053 0.2313-2.6969 0.0181-1.4916 0.11841-3.5454 0.22296-4.5641l0.19009-1.8521 0.0745 2.7781c0.041 1.528 0.149 3.5994 0.24006 4.6031l0.16558 1.8249 2.7397-3.4786c1.5069-1.9132 2.7889-3.4786 2.849-3.4786 0.0601 0-0.94275 1.5776-2.2285 3.5057-1.2857 1.9282-2.4206 3.6458-2.5219 3.8171-0.11964 0.20225 0.44296 0.13429 1.6054-0.19394 5.8491-1.6516 7.3493-2.0543 7.4134-1.9902 0.0394 0.0393-1.8401 0.76432-4.1765 1.611-2.3364 0.84673-4.2992 1.6224-4.3618 1.7236-0.0626 0.10127 1.7895 0.87388 4.1158 1.7169s4.1927 1.5696 4.1477 1.6147c-0.045 0.045-1.9743-0.44662-4.2873-1.0926s-4.2519-1.128-4.3087-1.0712c-0.0859 0.0859 1.2417 2.1635 4.5298 7.0888 1.1214 1.6798 0.0831 0.50245-2.627-2.9787-1.589-2.0411-2.9229-3.5538-2.9642-3.3614-0.0413 0.19232-0.17232 2.3088-0.29112 4.7033-0.11881 2.3945-0.2479 3.8179-0.28687 3.163z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .84 }} exit={{opacity:0}}  className="star-10-clone-3" width="20.509mm" height="20.665mm" version="1.1" viewBox="0 0 20.509 20.665" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <g transform="translate(-96.458 -137.31)">
  <path d="m106.46 157.82c-0.039-0.65484-0.1461-2.7916-0.23806-4.7484l-0.16718-3.5578-2.8755 3.624c-1.5815 1.9932-2.9222 3.624-2.9793 3.624-0.0571 0 1.0289-1.6965 2.4133-3.77 1.3844-2.0735 2.4274-3.7975 2.3178-3.831-0.10957-0.0335-2.0437 0.46344-4.2981 1.1043-2.2544 0.64088-4.1313 1.1329-4.1708 1.0933-0.03955-0.0395 1.8285-0.77473 4.1513-1.6337 2.3227-0.85901 4.1401-1.6347 4.0385-1.7237-0.10156-0.089-1.9437-0.80245-4.0936-1.5854-2.1499-0.78292-3.8168-1.4527-3.7042-1.4883 0.11265-0.0357 1.9907 0.44994 4.1736 1.0791 2.1828 0.62915 4.0071 1.1151 4.0539 1.0799 0.0468-0.0352-0.97069-1.6528-2.2612-3.5948-2.7129-4.0824-2.7824-4.1922-2.6521-4.1922 0.0538 0 1.3408 1.6006 2.8599 3.5568s2.8513 3.5636 2.9604 3.5719c0.10914 8e-3 0.21322-1.2053 0.2313-2.6969 0.0181-1.4916 0.11841-3.5454 0.22296-4.5641l0.19009-1.8521 0.0745 2.7781c0.041 1.528 0.149 3.5994 0.24006 4.6031l0.16558 1.8249 2.7397-3.4786c1.5069-1.9132 2.7889-3.4786 2.849-3.4786 0.0601 0-0.94275 1.5776-2.2285 3.5057-1.2857 1.9282-2.4206 3.6458-2.5219 3.8171-0.11964 0.20225 0.44296 0.13429 1.6054-0.19394 5.8491-1.6516 7.3493-2.0543 7.4134-1.9902 0.0394 0.0393-1.8401 0.76432-4.1765 1.611-2.3364 0.84673-4.2992 1.6224-4.3618 1.7236-0.0626 0.10127 1.7895 0.87388 4.1158 1.7169s4.1927 1.5696 4.1477 1.6147c-0.045 0.045-1.9743-0.44662-4.2873-1.0926s-4.2519-1.128-4.3087-1.0712c-0.0859 0.0859 1.2417 2.1635 4.5298 7.0888 1.1214 1.6798 0.0831 0.50245-2.627-2.9787-1.589-2.0411-2.9229-3.5538-2.9642-3.3614-0.0413 0.19232-0.17232 2.3088-0.29112 4.7033-0.11881 2.3945-0.2479 3.8179-0.28687 3.163z" fill="#fff" stroke-width=".26458"/>
 </g>
</motion.svg>

    </div>
    <div>
<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .50 }} exit={{opacity:0}}  className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</motion.svg>
<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .50 }} exit={{opacity:0}} className="waves-top" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</motion.svg>
</div>
</motion.div>
</AnimatePresence>



    <div className="Admin-Signin-Container">

    <div className="Admin-Signin-Username-box">
     
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      
          <motion.label initial={{y:'-100vh'}} animate={{y:0}} transition={{delay:.90}}>Username</motion.label>
          
          <motion.input initial={{opacity:0,width:0}} animate={{opacity:1, width:'30vw'}} transition={{delay:1.25}}
            className="Username-ADMIN-input"
            type="text"
            name="username"
            onChange={(e) => handleInputChange(e)}
          />
    
      
          <motion.label initial={{y:'-100vh'}} animate={{y:0}} transition={{delay:1}}>Password</motion.label>
       
          <motion.input initial={{opacity:0,width:0}} animate={{opacity:1, width:'30vw'}} transition={{delay:1.25}}
            className="Password-ADMIN-input"
            type="password"
            name="password"
            onChange={(e) => handleInputChange(e)}
          />
      
        <motion.button initial={{opacity:0,width:0}} animate={{opacity:1, width:'auto'}} transition={{delay:1.50}}
          type="submit"
          className="ADMIN-submit"
          onClick={handleSubmit}
        >
          <motion.div transition={{delay:.10}} whileHover={{scale:.75}}>
          Submit
          </motion.div>
        </motion.button>

        {errorMessage.value && (
          <p className="text-danger" style={{fontSize:'2vw', marginBottom:'1vw', color:'black'}}> {errorMessage.value} </p>
        )}
      </form>

     
    </div>
    </div>
    <AnimatePresence>
    <motion.div initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .25 }} exit={{opacity:0}} className="Blob-Container-right">
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
    <div>
<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .50 }} exit={{opacity:0}} className="waves-right" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</motion.svg>
<motion.svg initial={{opacity:0}} animate={{opacity:1}}  transition={{ delay: .50 }} exit={{opacity:0}} className="waves-top-right" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</motion.svg>
</div>
    </motion.div>
    </AnimatePresence>
    
    </>
  );
}

export default Signin;
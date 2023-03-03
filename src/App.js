import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Home from './Home.js'
import Login from './Login.js'
import LoginTest from './Login-test.js'
import About from './About.js'
import Gallery from './Gallery.js'
import UploadForm from './Components/UploadForm.js'
import ImageGrid from './Components/ImageGrid.js'
import Create2 from  './Paint.js'
import {AuthProvider} from './Components/AuthContext'
import UserPage from './UserPage.js'
import {useState, useEffect} from 'react'
import {auth} from './firebase/config'
import {onAuthStateChanged} from 'firebase/auth'
import Register from './Components/Register'
import Register1 from './Components/RegisterBackground'
import VerifyEmail from './Components/VerifyEmail';
import PrivateRoute from './Components/PrivateRoute'
import Signin from "./Components/Signin";
import ProtectedRoute from "./Components/ProtectedRoute";
import UseAuth from "./Components/ProtectedRoute";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const [trueLogin, setTrueLogin] = useState(false)
  useEffect(() => {
  function makeTrue() {
    setTrueLogin(true)
  }

  function makefalse() {
    setTrueLogin(false)
  }

  isAuthenticated ? makeTrue() :  makefalse()
  }, [])
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])


  return(
  <div> 


  
  <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
        
    <Routes>

    <Route path="/signin" element={<Signin />}/>

    <Route
      path="/upload"
      element={
        <ProtectedRoute auth={{ isAuthenticated: trueLogin}}>
          <UploadForm />
        </ProtectedRoute>
        }
        />
   
   

    <Route exact path='/user' element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }/>
          <Route exact path='/create' element={
            <PrivateRoute>
              <Create2 />
            </PrivateRoute>
          }/>
    <Route path="/" element={<Home />}/>
    <Route path="/create1" element={<Create2 />}/>
    <Route path="/test" element={<UseAuth />}/>
    <Route path="/login" element={
            !currentUser?.emailVerified 
            ? <Login/>
            : <Navigate to='/user' replace/>
          } />
    <Route path="/login-test" element={<LoginTest />}/>
    <Route path="/about" element={<About />}/>
    {/* <Route path="/upload" element={<UploadForm />}/> */}
    <Route path="/gallery" element={<Gallery />}/>
    {/*<Route path="/create" element={<Create2 />}/>*/}
  
    <Route path="/register1" element={<Register1/>} />
  
    <Route path="/register" element={<Register/>} />
    <Route path='/verify-email' element={<VerifyEmail/>} /> 
    </Routes>

   </AuthProvider>
  
  

  </div>
  )
}
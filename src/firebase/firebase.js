import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { useState, useEffect, useContext, createContext } from 'react'

export const firebaseApp = initializeApp({  
    apiKey: "AIzaSyAu9Vvl9loHvDc6R3lk5VMu_ITo0DF-osY",
    authDomain: "aowr-2dfb4.firebaseapp.com",
    projectId: "aowr-2dfb4",
    storageBucket: "aowr-2dfb4.appspot.com",
    messagingSenderId: "343493231227",
    appId: "1:343493231227:web:3dfa15324985e16f9818de",
    measurementId: "G-YX2S33ER8W"})

export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}
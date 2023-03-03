import {Navigate} from 'react-router-dom'
import {useAuthValue} from './AuthContext'
import { getAuth, onAuthStateChanged } from "firebase/auth";

 

export default function PrivateRoute({children}) {
  const auth = getAuth();
  const user = auth.currentUser;
  
  const {currentUser} = useAuthValue()

  if(!user?.emailVerified){
    return <Navigate to='/login' replace/>
  }

  

  return children
}
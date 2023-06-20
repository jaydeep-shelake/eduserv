import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'
import { setUser } from '@/redux/slices/authSlice'
const AuthProvider = ({children}) => {
const dispatch = useDispatch()
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,user=>{
    if(user){
        dispatch(setUser({email:user.email,id:user.uid}))
    }
   })
   return unsubscribe
  },[]) 
  return children
}

export default AuthProvider
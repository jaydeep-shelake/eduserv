import {auth} from "../firebase"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth"

export const signup=async(email,password,name)=>{
  const userCred = await createUserWithEmailAndPassword(auth,email,password)
  return {email:userCred.user.email,id:userCred.user.uid}
}

export const signin=async(email,password)=>{
  const userCred = await signInWithEmailAndPassword(auth,email,password)
  return {email:userCred.user.email,id:userCred.user.uid}
}

export const signout=async()=>{
  await signOut(auth)
}